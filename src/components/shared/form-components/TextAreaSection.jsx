import styled from "@emotion/styled";

const TextAreaContainer = styled.section`
  textarea {
    margin-left: 16px;
    padding: 8px;
    background-color: #a1BAD6;
    border:  1px solid #192841;
    outline: none;
    color: #192841;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: 16px;
  }
`

const TextAreaSection = (props) => {
  return ( 
    <TextAreaContainer>
      <textarea name={props.label} id={props.label} cols="82" rows={props.rows} placeholder={props.placeholder} value={props.value} onChange={(e) => props.function(e.target.value)} ></textarea>
    </TextAreaContainer>
  );
}
 
export default TextAreaSection;