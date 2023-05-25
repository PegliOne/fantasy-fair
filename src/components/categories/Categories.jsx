import _ from 'lodash';
import { BackLink } from '../shared/styles';
import useFetchStories from "../../hooks/useFetchStories";
import CategoryList from './CategoryList';

const url = 'http://localhost:8000/stories';

const Categories = () => {
  const { stories, error } = useFetchStories(url);

  return ( 
    <main>
      <h1>Story Categories</h1>
      <h2>Check out these Stories in these Categories</h2>
      { !!error && <div><p className="error">Error: { error }</p></div>}
      {!!stories && <CategoryList stories={_.uniqBy(stories, 'category')} />}
      <BackLink to="/">Or view popular stories</BackLink>
    </main>
  );
}
 
export default Categories;