import { useEffect, useState } from "react";

const useFetchStories = (url) => {
  const [stories, setStories] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setStories(data);
      })
      .catch(err => {
        setError(err.message);
      })
  }, []);

  return { stories, error };
}

export default useFetchStories;