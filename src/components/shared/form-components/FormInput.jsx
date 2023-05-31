import styled from "@emotion/styled";
import capitalise from '../capitalise';

const InputContainer = styled.div`
  input {
    width: min-content;
    background-color: transparent;
    border: none;
    font-size: 16px;
    outline: none;
    border-bottom: 1px solid #192841;
  }
`

const FormInput = (props) => {
  return ( 
    <InputContainer>
      <label htmlFor={props.label}>{capitalise(props.label).replace('-',' ')}:</label>
      <input id={props.label} name={props.label} type={props.type} placeholder={`Enter the story ${props.label}...`} min={props.min} max={props.max} value={props.value} onChange={(e) => props.function(e.target.value)} />
    </InputContainer>
  );
}
 
export default FormInput;