import styled from "@emotion/styled";
import capitalise from "../capitalise";

const InputContainer = styled.div`
  label {
    margin-right: 12px;
    color: #192841;
    font-weight: 700;
  }

  input {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    text-align: center;
    font-size: 16px;
    outline: none;
    border-bottom: 1px solid #192841;
  }
`

const FormInput = (props) => {
  return ( 
    <InputContainer>
      <label htmlFor={props.label}>{capitalise(props.label).replace("-"," ")} {props.required ? "*" : ""}:</label>
      <input id={props.label} name={props.label} type={props.type} placeholder={`Enter the story ${props.label}...`} min={props.min} max={props.max} minLength={props.minlength} maxLength={props.maxlength} value={props.value} onChange={(e) => { props.function(e.target.value); e.target.focus() } } required={props.required} />
    </InputContainer>
  );
}
 
export default FormInput;