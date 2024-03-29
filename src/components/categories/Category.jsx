import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import capitalise from "../shared/capitalise";
import StoryList from "../shared/StoryList";
import { BackLink } from "../shared/styles";

const url = "http://localhost:8000/stories";

const Category = () => {
  const { category } = useParams();
  const { data: stories, error } = useFetchData(url);

  return ( 
    <main>
      <h1>{capitalise(category)} Stories</h1>
      { !!error && <div><p className="error">Error: { error }</p></div>}
      { !!stories && <StoryList stories={ stories.filter((story) => story.category === category.toLowerCase()) } />}
      <BackLink to="/">Or View Popular Stories</BackLink>
    </main>
  );
}
 
export default Category;