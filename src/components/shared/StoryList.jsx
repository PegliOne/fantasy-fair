import styled from '@emotion/styled';
import { LinkListContainer } from './styles';
import { Link } from 'react-router-dom';

const StorySection = styled(LinkListContainer)`
  a div span {
    font-weight: 600;
  }
`

function deleteStory(e, id) {
  e.preventDefault();
  fetch(`http://localhost:8000/stories/${id}`, {
    method: 'DELETE'
  }).then(() => {
    window.location.reload();
  })
}

const StoryList = ({stories}) => {
  return ( 
    <StorySection>
      { stories.map((story) => <Link to={ `/stories/${story.id}` } key={ story.id }>
        <div>
          <div className="story-info">
            <span>{ story.title } ({ story.year }) by { story.author }: </span> 
            { story.blurb }
          </div>
          <div className="story-links">
            <button href={ `/stories/${story.id}/edit` }>Edit</button>
            <button onClick={(e) => deleteStory(e, story.id)}>Delete</button>
          </div>
        </div>
      </Link>)}
    </StorySection>
  );
}

export default StoryList;