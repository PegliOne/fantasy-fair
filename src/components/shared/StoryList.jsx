import styled from '@emotion/styled';

const StorySection = styled.section`
  div.story {
    width: 800px;
    margin-bottom: 24px;
    padding: 24px 0;
    border: 2px solid #192841;
    color: #192841;

    a {
      color: #192841;
      font-weight: 600;
      text-decoration: none;
    }
  }
`

const StoryList = ({stories}) => {
  return ( 
    <StorySection>
      { stories.map((story) => <div className="story">
        <a href="#">{ `${story.title} (${story.year}) by ${story.author}` }</a>: { story.blurb }
      </div>) }
    </StorySection>
  );
}
 
export default StoryList;