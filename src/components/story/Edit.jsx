import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Form from "./shared/Form";

const Edit = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/stories/${id}`;
  
  const { data: story } = useFetchData(url);

  return ( 
    <main>
      <h1>Edit the Story</h1>
      <h2>Update the Story Details</h2>
      { story && <Form story={story} />}
    </main>
  );
}
 
export default Edit;