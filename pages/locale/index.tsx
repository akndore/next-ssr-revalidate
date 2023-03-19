import { useRouter } from "next/router";
import Link from "next/link";

export default function PostPage() {
  return (
    <>
      <h1>Locale</h1>
      <ul>
        <li>
          <Link href={`/locale/1`}>Türkçe</Link>
        </li>
        <li>
          <Link href={`/locale/2`}>İngilizce</Link>
        </li>
      </ul>
    </>
  );
}
