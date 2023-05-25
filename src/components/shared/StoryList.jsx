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
        <div><span>{ story.title } ({ story.year }) by { story.author }: </span> { story.blurb }</div>
      </Link>)}
    </StorySection>
  );
}

export default StoryList;