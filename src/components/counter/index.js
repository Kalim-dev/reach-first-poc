import React, { useEffect, useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("Khan");

  useEffect(() => {
    console.log("Hello num is " + num, "and name is " + name);
  }, [name, num]);

  return (
    <>
      <p>{num} </p>
      <p>{name} </p>
      <button onClick={() => setNum(Math.random() * 1000)}>Set Name</button>
      <button onClick={() => setName("New Name " + Math.random() * 1000)}>
        Set Name
      </button>
    </>
  );
};

export default Counter;
