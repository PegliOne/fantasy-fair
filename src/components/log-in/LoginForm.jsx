import _ from "lodash";
import { useState } from "react";
import { StyledForm } from "../shared/styles";
import useFetchData from "../../hooks/useFetchData";
import FormInput from "../shared/form-components/FormInput";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const { data: currentUsers, error: serverError } = useFetchData("http://localhost:8000/users");

  function verifyAndSubmitForm(user) {
    const validUser = _.find(currentUsers, (currentUser) => {
      return user.email === currentUser.email;
    });

    if (!validUser || user.password !== validUser.password) {
      setError("Error: Incorrect email or password");
    }
    setIsPending(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = { email, password };

    setIsPending(true);

    verifyAndSubmitForm(user);
  }

  return (<StyledForm onSubmit={(e) => handleSubmit(e)}>
    <div className="form-row">
      <FormInput type="text" label="email" value={email} function={setEmail} required={true} />
    </div>
    <div className="form-row">
      <FormInput type="text" label="password" value={password} function={setPassword} required={true} />
    </div>
    <div>
      { !isPending && <button type="submit">Log In</button> }
      { isPending && <button type="submit">Logging In</button> }
      <p className="info">An * indicates a required field.</p>
      <p className="error">{ error }</p>
      { serverError && <p className="error">Error: { serverError }</p> }
    </div>
  </StyledForm>);
}
 
export default LoginForm;