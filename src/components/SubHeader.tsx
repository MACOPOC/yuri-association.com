import Image from "next/image";
import NavButtons from "./NavButtons";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <nav className="flex flex-col items-center">
        <Link href="/">
          <Image src="/image/logo.png" alt="MACOPOC" width={96} height={38} />
        </Link>
        <Link href="/">
          <h1 className="mb-4 mt-4 text-2xl leading-none tracking-tight md:text-3xl lg:text-4xl dark:text-white">
            백합진흥연구협회
          </h1>
        </Link>
        {/* <Image
              src="/image/title.png"
              className="invert dark:invert-0 m-4"
              alt="MACOPOC"
              width={170}
              height={38}
            /> */}
        <NavButtons />
      </nav>
    </header>
  );
}
