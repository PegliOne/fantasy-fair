import styled from "@emotion/styled";
import FormInput from "../../shared/form-components/FormInput";
import FormSelect from "../../shared/form-components/FormSelect";

const FormSection = styled.section`
  label {
    margin-right: 12px;
    color: #192841;
    font-weight: 700;
  }

  div.form-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div {
      display: flex;
      width: 280px;
      margin-bottom: 24px;
    }
  }
`

const StoryDetailsFormSection = (props) => {
  const categories = ['general', 'romance', 'action', 'fantasy', 'sci-fi', 'comedy'];

  return ( 
    <FormSection>
      <div className="form-row">
        <FormInput type="text" label="title" value={props.title} function={props.setTitle} />
        <FormInput type="number" label="publication-year" value={props.year} function={props.setYear} min="1900" max="2023" />
      </div>
      <div className="form-row">
        <FormInput type="text" label="author" value={props.author} function={props.setAuthor} />
        <FormSelect label="category" values={categories} function={props.setCategory} />
      </div>  
    </FormSection>
  );
}
 
export default StoryDetailsFormSection;