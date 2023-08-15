// import Meteor from "meteor-react-js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledForm } from "../../shared/styles";
import TextAreaSection from "../../shared/form-components/TextAreaSection";
import StoryDetailsFormSection from "./StoryDetailsFormSection";

const Form = ({story}) => {
  const [title, setTitle] = useState(story ? story.title : "");
  // Make default logged in author work
  const [author, setAuthor] = useState(story ? story.author : "Meteor.user().username");
  const [category, setCategory] = useState(story ? story.category : "general");
  const [year, setYear] = useState(story ? story.year : 2023);
  const [blurb, setBlurb] = useState(story ? story.blurb : "");
  const [body, setBody] = useState(story ? story.body : "");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function handleSubmit (e, id) {
    e.preventDefault();

    const story = { title, author, year, category, blurb, body };

    setIsPending(true);

    fetch(`http://localhost:8000/stories/${id}`, {
      method: id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(story)
    }).then(()=> {
      setIsPending(false);
      history.push("/");
    });
  }

  return ( 
    <StyledForm onSubmit={(e) => handleSubmit(e, story ? story.id : "")}>
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
    </StyledForm>
  );
}
 
export default Form;