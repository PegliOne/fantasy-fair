import styled from "@emotion/styled";
import FormInput from "../shared/form-components/FormInput";

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;

  div.form-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div {
      display: flex;
      width: 340px;
      margin-bottom: 24px;
    }
  }

  button {
    margin: 24px 0 24px 4px;
    padding: 12px 24px;
    background-color: #192841;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 200ms;

    &:hover {
      background-color: #2D3033;
      cursor: pointer;
    }
  }  
`

const SignUpForm = (props) => {
  return (<UserForm>
    <div class="form-row">
      <FormInput type="text" label="username" value={props.username} function={props.setUsername} />
    </div>
    <div class="form-row">
      <FormInput type="text" label="email" value={props.email} function={props.setEmail} />
    </div>
    <div class="form-row">
      <FormInput type="text" label="password" value={props.password} function={props.setPassword} />
    </div>
    <button type="submit">Sign In</button>
  </UserForm>);
}
 
export default SignUpForm;