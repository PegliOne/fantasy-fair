import styled from "@emotion/styled";
import capitalise from '../capitalise';

const SelectContainer = styled.div`
  select {
    background-color: transparent;
    border: none;
    font-size: 16px;
    outline: none;
    border-bottom: 1px solid #192841;
  }
`

const FormSelect = (props) => {
  return ( 
    <SelectContainer>
      <label htmlFor={props.label}>{capitalise(props.label)}:</label>
      <select name={props.label} id={props.label} onChange={(e) => props.function(e.target.value)}>
        {props.values.map((value) => <option value={value}>{capitalise(value)}</option>)}
      </select>
    </SelectContainer>
  );
}
 
export default FormSelect;