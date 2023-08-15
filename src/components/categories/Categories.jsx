import _ from "lodash";
import { BackLink } from "../shared/styles";
import useFetchData from "../../hooks/useFetchData";
import CategoryList from "./CategoryList";

const url = "http://localhost:8000/stories";

const Categories = () => {
  const { data: stories, error } = useFetchData(url);

  return ( 
    <main>
      <h1>Story Categories</h1>
      <h2>Check out these Stories in these Categories</h2>
      { !!error && <div><p className="error">Error: { error }</p></div>}
      {!!stories && <CategoryList stories={_.uniqBy(stories, "category")} />}
      <BackLink to="/">Or View Popular Stories</BackLink>
    </main>
  );
}
 
export default Categories;