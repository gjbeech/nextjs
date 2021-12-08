import Link from "next/link";
import Image from "next/link";

export function Header() {
  return (
    <h2>
      <Link href="/">Home</Link>
      {/* <Image alt="Logo" src=""></Image> */}
    </h2>
  );
}

// const MyImage = (props) => {
//     return (
//       <Image
//         loader={myLoader}
//         src="me.png"
//         alt="Picture of the author"
//         width={500}
//         height={500}
//       />
//     )
//   }
