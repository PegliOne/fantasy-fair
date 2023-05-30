import styled from "@emotion/styled";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import TextAreaSection from "../shared/form-components/TextAreaSection";
import StoryDetailsFormSection from "./create-components/StoryDetailsFormSection";

const Create = () => {
  const StoryForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 24px 0 24px;

    section {
      display: flex;
      justify-content: space-around;
      margin-bottom: 24px;
    }
  `

  const [title, setTitle] = useState('');
  // Have the default be the current username
  const [author, setAuthor] = useState('Pamela Heystek');
  const [category, setCategory] = useState('general');
  const [year, setYear] = useState(2023);
  const [blurb, setBlurb] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function handleSubmit (e) {
    e.preventDefault();

    const story = { title, author, year, category, blurb, body };

    setIsPending(true);

    fetch('http://localhost:8000/stories', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(story)
    }).then(()=> {
      setIsPending(false);
      history.push('/');
    })
  }

  return ( 
    <main>
      <h1>Create a Story</h1>
      <h2>Enter your Story here</h2>
      <StoryForm onSubmit={handleSubmit}>
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
    </main>
  );
}
 
export default Create;