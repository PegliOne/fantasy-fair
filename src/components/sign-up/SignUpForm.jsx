import { StyledForm } from "../shared/styles";
import FormInput from "../shared/form-components/FormInput";

const SignUpForm = (props) => {
  return (<StyledForm>
    <div className="form-row">
      <FormInput type="text" label="username" value={props.username} function={props.setUsername} />
    </div>
    <div className="form-row">
      <FormInput type="text" label="email" value={props.email} function={props.setEmail} />
    </div>
    <div className="form-row">
      <FormInput type="text" label="password" value={props.password} function={props.setPassword} />
    </div>
    <button type="submit">Sign In</button>
  </StyledForm>);
}
 
export default SignUpForm;