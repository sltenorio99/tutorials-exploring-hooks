import React, { useState, useEffect } from "react";

const DataLoader = props => {
  const [data, setData] = useState([]);

  // ComponentDidMount converted into useEffect()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(rData => setData(rData));
  }, []); /* <- only re-run when value inside [] changes (in this case: never)
   https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
   */

  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataLoader;
