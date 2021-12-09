import { List } from "../../utils/types";
import { useRouter } from "next/router";
import { useState } from "react";
import Nav from "../../components/Nav";

interface ShowProps {
  thisList: List;
  url: string;
}

function Show(props: ShowProps) {
  const router = useRouter();
  const [thisList, setList] = useState<List>(props.thisList);

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
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(process.env.API_URL_LISTS + "/" + context.query.id);
  const thisList = await res.json();
  return { props: { thisList, url: process.env.API_URL_LISTS } };
}

export default Show;
