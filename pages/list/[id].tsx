import { List, ListItem } from "../../utils/types";
import { useRouter } from "next/router";
import { useState } from "react";
import Nav from "../../components/Nav";
import Link from "next/link";

interface ShowProps {
  thisList: List;
  items: Array<ListItem>;
  url: string;
}

function Show(props: ShowProps) {
  const router = useRouter();
  const [thisList, setList] = useState<List>(props.thisList);
  const items = useState<Array<ListItem>>(props.items);

  console.log(items);

  //   const handleComplete = async () => {
  //     if (!thisList.completed) {
  //       const newList: List = { ...thisList, completed: true };
  //       await fetch(props.url + "/" + thisList._id, {
  //         method: "put",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(newList),
  //       });
  //       setList(newList);
  //     }
  //   };

  //   const handleDelete = async () => {
  //     await fetch(props.url + "/" + thisList._id, {
  //       method: "delete",
  //     });
  //     router.push("/");
  //   };

  return (
    <div>
      <Nav />
      <h1>{thisList.title}</h1>

      <ul>
        {/* {items.map((t) => (
          <li key={t._id}>
            <Link passHref href={`/list/${t._id}`}>
              {t.title + (t.type ? " (" + t.type + ")" : "")}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const itemsResult = await fetch(
    process.env.API_URL_ITEMS + "/" + context.query.id
  );
  const items = await itemsResult.json();

  const listResult = await fetch(
    process.env.API_URL_LISTS + "/" + context.query.id
  );
  const thisList = await listResult.json();
  return { props: { url: process.env.API_URL_LISTS, thisList, items } };
}

export default Show;
