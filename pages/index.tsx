import { useState } from "react";
import { fetchPets } from "../helpers/fetchPets";
import { helloDave, helloWorld } from "../helpers/helloDave";
import Link from "next/link";
import { Header } from "../components/Header";

export default function Home() {
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

  //console.dir(pets);

  return (
    <main>
      <Header />
      hello dave..
      <ul>
        {/* {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))} */}
      </ul>
      <Link href="/myList">My List</Link>
    </main>
  );
}
