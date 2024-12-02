import Link from "next/link";

export default function NavButtons() {
  return (
    <ul className="flex space-x-4 mt-4">
      <li>
        <Link href="/about">협회 소개</Link>
      </li>
      <li>
        <Link href="/certification">백합애호가자격증</Link>
      </li>
      <li>
        <Link href="/members">협회원</Link>
      </li>
    </ul>
  );
}
