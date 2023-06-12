import styled from "@emotion/styled";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import TextAreaSection from "../../shared/form-components/TextAreaSection";
import StoryDetailsFormSection from "./StoryDetailsFormSection";

const StoryForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;

  section {
    display: flex;
    justify-content: space-around;
    margin-bottom: 24px;
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

const Form = ({story}) => {
  const [title, setTitle] = useState(story ? story.title : '');
  // Have the default be the current username
  const [author, setAuthor] = useState(story ? story.author : 'Pamela Heystek');
  const [category, setCategory] = useState(story ? story.category : 'general');
  const [year, setYear] = useState(story ? story.year : 2023);
  const [blurb, setBlurb] = useState(story ? story.blurb : '');
  const [body, setBody] = useState(story ? story.body : '');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function handleSubmit (e, id) {
    e.preventDefault();

    const story = { title, author, year, category, blurb, body };

    setIsPending(true);

    // Rewrite this logic
    if (id) {
      fetch(`http://localhost:8000/stories/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(story)
      }).then(()=> {
        setIsPending(false);
        history.push('/');
      })
    } else { 
      fetch('http://localhost:8000/stories', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(story)
      }).then(()=> {
        setIsPending(false);
        history.push('/');
      })
    }
    
  }

  return ( 
    <StoryForm onSubmit={(e) => handleSubmit(e, story.id)}>
      <h3>Story Details</h3>
      <StoryDetailsFormSection title={title} setTitle={setTitle} year={year} setYear={setYear} author={author} setAuthor={setAuthor} setCategory={setCategory} />
      <h3>Summary</h3>
      <TextAreaSection label="blurb" value={blurb} rows="4" placeholder="Enter a summary..." function={setBlurb} />
      <h3>Story</h3>
      <TextAreaSection label="body" value={body} rows="10" placeholder="Enter the story..." function={setBody} />
      <div>
        { !isPending && <button type="submit">Submit Story</button> }
        { isPending && <button type="submit">Submitting Story</button> }
      </div>
    </StoryForm>
  );
}
 
export default Form;