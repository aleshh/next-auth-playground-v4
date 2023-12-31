/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { getServerSession } from "next-auth";
import styles from "./page.module.css";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  const image = session?.user?.image;

  return (
    <main className={styles.main}>
      <h1>Next Auth Playground</h1>
      <div>{session?.user?.name || "Not logged in"}</div>
      {image && <img alt="user avatar" width="80" height="80" src={image} />}
    </main>
  );
}
