import Link from "next/link";

export function ListView() {
  return (
    <div>
      <h1>List component</h1>
      <div>
        <Link href="/create-item">
          <button>New Item</button>
        </Link>
      </div>
      end of component
    </div>
  );
}
