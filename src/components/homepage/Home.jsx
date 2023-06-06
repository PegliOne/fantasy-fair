import useFetchStories from "../../hooks/useFetchStories";
import StoryList from "../shared/StoryList";

const url = 'http://localhost:8000/stories';

const Home = () => {
  const { stories, error } = useFetchStories(url);

  return ( 
    <main>
      <h1>Welcome to Fantasy Fair!</h1>
      <h2>Check out these Popular Stories</h2>
      { !!error && <div><p className="error">Error: { error }</p></div>}
      { !!stories && <StoryList stories={stories} />}
    </main>
  );
}
 
export default Home;