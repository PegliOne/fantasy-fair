import _ from 'lodash';
import { useParams } from "react-router-dom";
import useFetchStories from "../../hooks/useFetchStories";
import StoryList from "../shared/StoryList";

const url = 'http://localhost:8000/stories';

function capitalise(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

const Category = () => {
  const { category } = useParams();
  const { stories, error } = useFetchStories(url);

  return ( 
    <main>
      <h1>{capitalise(category)}</h1>
      { !!error && <div><p className="error">Error: { error }</p></div>}
      { !!stories && <StoryList stories={ stories.filter((story) => story.category === category) } />}
    </main>
  );
}
 
export default Category;