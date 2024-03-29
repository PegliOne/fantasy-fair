import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { BackLink } from "../shared/styles";

const StorySection = styled.section`
  h1 {
    margin: 48px 0 12px 0 !important;
  }

  div {
    margin: 36px 0;
  }

  a {
    color: #192841;
    font-weight: 600;
    text-decoration: none;
  }  
`

const Story = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/stories/${id}`
  
  const { data: story, error } = useFetchData(url);
  const showError = error && Object.keys(story).length === 0;

  function addParagraphBreaks(text) {
    return text.replace(/\n/g, "<br />");
  }

  return ( 
    <main>
      { showError && <p className="error">Error: Story not found</p> }
      { !!story && Object.keys(story).length !== 0 && <StorySection>
        <h1>{ story.title } ({ story.year })</h1>
        <p>By { story.author }</p>
        <div dangerouslySetInnerHTML={{ __html: addParagraphBreaks(story.body) }}></div>
        <BackLink to="/">Back to Story List</BackLink>
      </StorySection> }
    </main>
  );
}
 
export default Story;