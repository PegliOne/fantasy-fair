import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { StyledForm } from "../shared/styles";
import validatePassword from "./validate-password";
import useFetchCurrentUsersDetails from "../../hooks/useFetchCurrentUsersDetails";
import FormInput from "../shared/form-components/FormInput";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const { usernames: currentUsernames, emails: currentEmails } = useFetchCurrentUsersDetails('http://localhost:8000/users');

  function submitForm(user) {
    fetch(`http://localhost:8000/users`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(()=> {
      history.push('/');
    });
  }

  function verifyAndSubmitForm(user) {
    const passwordIsValid = validatePassword(password);

    if (currentUsernames.includes(user.username)) {
      setError('Error: Username is already taken');
    } else if (currentEmails.includes(user.email)) {
      setError('Error: Email is already taken');
    } else if (!passwordIsValid) {
      setError('Error: Password must contain at least one letter, number and special character');
    } else {
      submitForm(user);
    }

    setIsPending(false);
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