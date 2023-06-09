import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { StyledForm } from "../shared/styles";
import FormInput from "../shared/form-components/FormInput";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [currentUsernames, setCurrentUsernames] = useState('');
  const [email, setEmail] = useState('');
  const [currentEmails, setCurrentEmails] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        const usernames = data.map((user) => {
          return user.username;
        })
        const emails = data.map((user) => {
          return user.email;
        })
        setCurrentUsernames(usernames);
        setCurrentEmails(emails);
      })
  }, []);

  function validatePassword(password) {
    return /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /![a-zA-Z0-9]/.test(password);
  }

  function submitForm(user) {
    fetch(`http://localhost:8000/users`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then(()=> {
        setIsPending(false);
        history.push('/');
      });
  }

  function verifyAndSubmitForm(user) {
    const passwordIsValid = validatePassword(password);

    if (currentUsernames.includes(user.username)) {
      setIsPending(false);
      setError('Error: Username is already taken');
    } else if (currentEmails.includes(user.email)) {
      setIsPending(false);
      setError('Error: Email is already taken');
    } else if (!passwordIsValid) {
      setIsPending(false);
      setError('Error: Password must contain at least one letter, number and special character');
    } else {
      submitForm(user);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = { username, email, password };

    setIsPending(true);

    verifyAndSubmitForm(user);
  }

  return (<StyledForm onSubmit={(e) => handleSubmit(e)}>
    <div className="form-row">
      <FormInput type="text" label="username" value={username} function={setUsername} minLength={8} maxLength={16} required={true} />
    </div>
    <div className="form-row">
      <FormInput type="email" label="email" value={email} function={setEmail} required={true} />
    </div>
    <div className="form-row">
      <FormInput type="password" label="password" value={password} function={setPassword} required={true} minlength={8} />
    </div>
    <div>
      { !isPending && <button type="submit">Sign Up</button> }
      { isPending && <button type="submit">Creating User</button> }
      <p className="info">An * indicates a required field.</p>
      <p className="error">{ error }</p>
    </div>
  </StyledForm>);
}

export default SignUpForm;