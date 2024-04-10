import Link from "next/link";

export function ListView() {
  return (
    <>
      <div>
        <Link href="/create-item">
          <button>New Item</button>
        </Link>
      </div>
    </>
  );
}
