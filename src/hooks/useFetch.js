import { useState, useEffect } from "react";

// Reusable custom hook to fetch data and save it as a state
const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url) // fetch from passed in url
      .then(response => response.json())
      .then(data => setData(data)); // call setData() to set data state
  }, []); /* <- only re-run when value inside [] changes (in this case: never)
    https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    */

  return data;
};

export default useFetch;
