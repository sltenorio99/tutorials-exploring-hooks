import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataLoader = props => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

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
