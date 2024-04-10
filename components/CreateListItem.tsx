import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef } from "react";
import { ListItem } from "../utils/types";

interface CreateProps {
  url: string;
}

function CreateListItem(props: CreateProps) {
  const router = useRouter();
  const item = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    let listItem: ListItem = { item: "", completed: false, listId: "" };
    if (null !== item.current) {
      listItem = { item: item.current.value, completed: false, listId: "" };
    }

    await fetch(props.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listItem),
    });

    router.push("/");
  };

  return (
    <div>
      <h1>Create a New Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Name: </label>
        <input type="text" ref={item} id="itemName"></input>
        <input
          className="orangeButton"
          type="submit"
          value="create item"
        ></input>
      </form>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL_ITEMS,
    },
  };
}

export default CreateListItem;
