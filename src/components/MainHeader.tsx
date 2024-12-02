import NavButtons from "./NavButtons";
import Link from "next/link";
export default function MainHeader() {
  return (
    <header>
      <nav className="flex flex-col items-center">
        <Link href="/">
          <h1 className="mb-4 text-2xl leading-none tracking-tight md:text-3xl lg:text-4xl dark:text-white">
            백합진흥연구협회
          </h1>
          {/* <Image
              src="/image/title.png"
              className="invert dark:invert-0"
              alt="MACOPOC"
              width={170}
              height={38}
            /> */}
        </Link>
        <NavButtons />
      </nav>
    </header>
  );
}
