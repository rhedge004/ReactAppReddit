import React, { useState, useEffect } from "react";

const Planets = () => {
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
  console.log(data);
  return (
    <div>
      <span>{JSON.stringify(data)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Planets;
