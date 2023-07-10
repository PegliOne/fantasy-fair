import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { StyledForm } from "../shared/styles";
import FormInput from "../shared/form-components/FormInput";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [currentUsernames, setCurrentUsernames] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const usernames = data.map((user) => {
          return user.username
        });
        setCurrentUsernames(usernames);
      })
  }, []);

  function handleSubmit (e) {
    e.preventDefault();

    const user = { username, email, password };

    const passwordIsValid = /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password);

    setIsPending(true);

    // Replace with case

    if (currentUsernames.includes(username)) {
      setIsPending(false);
      setError('Error: Username is already taken');
    } else if (!passwordIsValid) {
      setIsPending(false);
      setError('Error: Password must contain lowercase letters, uppercase letters and numbers');
    } else {
      fetch(`http://localhost:8000/users`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then(()=> {
        setIsPending(false);
        history.push('/');
      });
    }
  }

  return (<StyledForm style={{width: '340px'}} onSubmit={(e) => handleSubmit(e)}>
    <div className="form-row">
      <FormInput type="text" label="username" value={username} function={setUsername} minlength={8} maxlength={16} required={true} />
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
      <p style={{marginTop: '24px'}}>An * indicates a required field.</p>
      <p class="error">{ error }</p>
    </div>
  </StyledForm>);
}

export default SignUpForm;