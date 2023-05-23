import _ from 'lodash';
import styled from "@emotion/styled";
import useFetchStories from "../../hooks/useFetchStories";
import { Link } from 'react-router-dom';

const url = 'http://localhost:8000/stories';

function capitalise(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

const CategorySection = styled.ul`
  a {
    color: #192841;
    text-decoration: none;

    div {
      margin-bottom: 24px;
      padding: 24px;
      border: 2px solid #192841;
      color: #192841;
      transition: background-color 200ms;

      &:hover {
        background-color: #D1E5F4;
      }
    }
  }
`

const Categories = () => {
  const { stories, error } = useFetchStories(url);

  return ( 
    <main>
      <h1>Story Categories List</h1>
      { !!error && <div><p className="error">Error: { error }</p></div>}
      <CategorySection>  
        {!!stories && _.uniqBy(stories, 'category').map((story) => <Link to={`/categories/${story.category}`} key={story.category}>
          <div>{capitalise(story.category)}</div>
        </Link>)}
      </CategorySection>
    </main>
  );
}
 
export default Categories;