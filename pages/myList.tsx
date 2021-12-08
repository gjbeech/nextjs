import Link from "next/link";
import { Header } from "../components/Header";

export default function MyList() {
  console.dir("my list");

  return (
    <main>
      <Header />
      <p>
        {/* <Link href="/">Home</Link> */}
        {/* <Link href="/myList">My List</Link> */}
      </p>
      My list
      <ul></ul>
    </main>
  );
}
