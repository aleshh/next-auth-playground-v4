import { headers } from "next/headers";

export default async function APIFromServer() {
  const resp = await fetch("http://localhost:3000/api/whoAmI", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  console.log(resp);

  return (
    <>
      <h1>
        API Route from{" "}
        <span style={{ textDecoration: "underline" }}>Server</span>
      </h1>
      <p>Name: {resp?.name}</p>
    </>
  );
}
