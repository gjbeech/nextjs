import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef } from "react";
import Nav from "../components/Nav";
import { List } from "../utils/types";

interface CreateProps {
  url: string;
}

function CreateList(props: CreateProps) {
  const router = useRouter();
  const title = useRef<HTMLInputElement>(null);
  const type = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    let list: List = { title: "", type: "" };
    // let typeValue = type?.current?.value ?? "";
    if (null !== title.current) {
      list = { title: title.current.value, type: type?.current?.value ?? "" };
    }

    await fetch(props.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });

    router.push("/");
  };

  return (
    <div>
      <Nav />
      <h1>Create a new list</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <label>List title: </label>
          <input type="text" ref={title}></input>
          <br />
          <label>List type: </label>
          <input type="text" ref={type}></input>
          <br />
          <input className="" type="submit" value="create item"></input>
        </form>
      </main>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL_LISTS,
    },
  };
}

export default CreateList;
