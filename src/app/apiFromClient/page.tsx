"use client";
import { useState, useEffect } from "react";

export default function APITestPage() {
  const [name, setName] = useState<string>();

  useEffect(() => {
    fetch("api/whoAmI")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <>
      <h1>
        API Route from{" "}
        <span style={{ textDecoration: "underline" }}>Client</span>
      </h1>
      <p>Name: {name}</p>
    </>
  );
}
