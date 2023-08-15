import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        setError(err.message);
      })
  }, [url]);

  return { data, error };
}

export default useFetchData;