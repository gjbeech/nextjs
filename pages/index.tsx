import React from "react";
import Nav from "../components/Nav";
import { ListView } from "../components/ListView";

import { List } from "../utils/types";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import CreateListItem from "../components/CreateListItem";
import { Lists } from "../components/Lists";

interface IndexProps {
  lists: Array<List>;
}

function Index(props: IndexProps) {
  console.dir("App running!");

  const { lists } = props;

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <main>
        <div className="itemsection">
          Lists:
          <Lists data={lists} />
          <ListView />
          <ul>
            {lists.map((t) => (
              <li key={t._id}>
                <Link passHref href={`/list/${t._id}`}>
                  {t.title + (t.type ? " (" + t.type + ")" : "")}
                </Link>
              </li>
            ))}
          </ul>
          {/* 
          {lists.map((t) => (
            <div key={t._id}>
              <Link href={`/list/${t._id}`}>
                <h3>
                  {t.title}
                  {t.type ? " (" + t.type + ")" : ""}
                </h3>
              </Link>
            </div>
          ))} */}
        </div>

        {/* <h3>Add Item</h3>
        <CreateListItem /> */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL_LISTS as string);
  const lists = await res.json();

  return {
    props: { lists },
  };
}

export default Index;

export function Home() {
  console.dir("App running!");

  //helloDave();

  // const pets = [
  //   { id: 1, name: "Tao" },
  //   { id: 2, name: "Arya" },
  //   { id: 3, name: "Pippin" },
  //   { id: 4, name: "Nova" },
  // ];

  //const petNames = pets.map((pet) => pet.name);
  //useState();
  //const pets = fetchPets();

  // return (
  //   <div>
  //     <Head>
  //       <title>Home</title>
  //     </Head>
  //     <Nav />
  //     <main>
  //       <div className={styles.container}>
  //         {posts.length === 0 ? (
  //           <h2>No added posts</h2>
  //         ) : (
  //           <ul>
  //             {posts.map((post, i) => (
  //               <PostCard post={post} key={i} />
  //             ))}
  //           </ul>
  //         )}
  //       </div>
  //     </main>
  //   </div>
  // );
}
