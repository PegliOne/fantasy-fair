import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StorySection = styled.section`
  a {
    color: #192841;
    text-decoration: none;

    div {
      margin-bottom: 24px;
      padding: 24px 0;
      border: 2px solid #192841;
      color: #192841;
      transition: background-color 200ms;

      &:hover {
        background-color: #D1E5F4;
      }

      span {
        font-weight: 600;
      }
    }
  }
`

const StoryList = ({stories}) => {
  return ( 
    <StorySection>
      { stories.map((story) => <Link to={ `/stories/${story.id}` } key={ story.id }>
        <div><span>{ story.title } ({ story.year }) by { story.author }: </span> { story.blurb }</div>
      </Link>)}
    </StorySection>
  );
}

export default StoryList;