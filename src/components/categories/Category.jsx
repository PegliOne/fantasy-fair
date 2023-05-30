import _ from 'lodash';
import { useParams } from "react-router-dom";
import useFetchStories from "../../hooks/useFetchStories";
import capitalise from '../shared/capitalise';
import StoryList from "../shared/StoryList";
import { BackLink } from '../shared/styles';

const url = 'http://localhost:8000/stories';

const Category = () => {
  const { category } = useParams();
  const { stories, error } = useFetchStories(url);

  return ( 
    <main>
      <h1>{capitalise(category)} Stories</h1>
      { !!error && <div><p className="error">Error: { error }</p></div>}
      { !!stories && <StoryList stories={ stories.filter((story) => story.category === category.toLowerCase()) } />}
      <BackLink to="/">Or view all popular stories</BackLink>
    </main>
  );
}
 
export default Category;