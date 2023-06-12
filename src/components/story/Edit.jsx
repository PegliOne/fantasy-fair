import { useParams } from "react-router-dom";
import useFetchStories from "../../hooks/useFetchStories";
import Form from "./shared/Form";

const Edit = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/stories/${id}`;
  
  const { stories: story } = useFetchStories(url);

  return ( 
    <main>
      <h1>Edit the Story</h1>
      <h2>Update the Story Details</h2>
      { story && <Form story={story} />}
    </main>
  );
}
 
export default Edit;