import React, { useState } from "react";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef } from "react";
import { List, ListItem } from "../utils/types";

interface CreateProps {
  url: string;
  lists: Array<List>;
}

function CreateItem(props: CreateProps) {
  const router = useRouter();
  const item = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLSelectElement>(null);
  const [selected, setSelected] = useState();
  const [value, setValue] = useState();
  const { lists } = props;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    let listItem: ListItem = { item: "", listId: "" };

    if (item.current !== null && list.current !== null) {
      if (item.current.value !== "") {
        console.log(list.current.value);
        listItem = {
          item: item.current.value,
          listId: list.current.value,
        };

        console.log(listItem);
        await fetch(props.url, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(listItem),
        });

        //router.push("/");
      } else {
        console.log("item is empty");
      }
    }
  };

  return (
    <div>
      <Nav />
      <h1>Create a New Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="list">Add to list: </label>

        <select id="list" ref={list} value={value}>
          {lists.map((t) => (
            <option key={t._id} value={t._id}>
              {t.title}
            </option>
          ))}
        </select>
        <br />
        <label>
          Item: <input type="text" ref={item}></input>
        </label>
        <input className="" type="submit" value="insert item"></input>
      </form>
      <div id="debug"></div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const res = await fetch(process.env.API_URL_LISTS as string);
  const lists = await res.json();
  return {
    props: {
      url: process.env.API_URL_ITEMS,
      lists,
    },
  };
}

export default CreateItem;
