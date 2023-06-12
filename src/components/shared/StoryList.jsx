import styled from '@emotion/styled';
import { LinkListContainer } from './styles';
import { Link } from 'react-router-dom';

const StorySection = styled(LinkListContainer)`
  a div span {
    font-weight: 600;
  }
`

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
            <Link to={ `/stories/${story.id}/edit` }>Edit</Link>
            <button>Delete</button>
          </div>
        </div>
      </Link>)}
    </StorySection>
  );
}

export default StoryList;