
import Link from "next/link";

export default function Feed() {
  return (
    <>
      <h1>Feed</h1>

      <Link href="/photo/1">
        Open Photo 1
      </Link>
    </>
  );
}