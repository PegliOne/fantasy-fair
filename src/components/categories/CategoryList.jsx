import styled from '@emotion/styled';
import { LinkListContainer } from '../shared/styles';
import { Link } from 'react-router-dom';
import capitalise from './capitalise';

const CategorySection = styled(LinkListContainer)`
  margin-bottom: 12px;

  a div {
    padding: 24px;
    font-weight: 600;
  }
`

const CategoryList = ({stories}) => {
  return ( 
    <CategorySection>  
      {stories.map((story) => <Link to={`/categories/${story.category}`} key={story.category}>
        <div>{capitalise(story.category)}</div>
      </Link>)}
    </CategorySection>
  );
}

export default CategoryList;