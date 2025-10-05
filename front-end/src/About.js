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
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{data.name}</h1>
      <img
        src={data.imageUrl}
        alt="Profile"
        style={{ width: "200px", borderRadius: "50%" }}
      />
      {data.bio.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default About;
