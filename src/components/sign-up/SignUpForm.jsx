import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { StyledForm } from "../shared/styles";
import FormInput from "../shared/form-components/FormInput";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function handleSubmit (e) {
    e.preventDefault();

    const user = { username, email, password };

    setIsPending(true);

    fetch(`http://localhost:8000/users`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(()=> {
      setIsPending(false);
      history.push('/');
    });
  }

  return (<StyledForm onSubmit={(e) => handleSubmit(e)}>
    <div className="form-row">
      <FormInput type="text" label="username" value={username} function={setUsername} />
    </div>
    <div className="form-row">
      <FormInput type="email" label="email" value={email} function={setEmail} />
    </div>
    <div className="form-row">
      <FormInput type="password" label="password" value={password} function={setPassword} />
    </div>
    <div>
      { !isPending && <button type="submit">Sign Up</button> }
      { isPending && <button type="submit">Creating User</button> }
    </div>
  </StyledForm>);
}

export default SignUpForm;