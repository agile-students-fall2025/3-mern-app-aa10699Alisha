import React, { useEffect, useState } from "react";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5002/api/about")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching about:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.image} alt="Me" style={{ width: "200px", borderRadius: "10px" }} />
      <small>Status: {data.status}</small>
    </div>
  );
}

export default About;
