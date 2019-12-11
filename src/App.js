import React, { useState, useEffect } from "react";
import Posts from './components/posts/';
import LoadingScreen from './components/loading/';

const Reddit = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});


  async function fetchData() {
      const res = await fetch("https://www.reddit.com/r/anime.json");
      res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
    }
  useEffect(() => {
    fetchData();
  }, []);

  let postData = (data.data ? Object.values(data.data) : '');

  return (
    <div>
      {/*<span>{JSON.stringify(data)}</span>*/}
      {(data.data ? <Posts data={postData} /> : <LoadingScreen />)}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Reddit;
