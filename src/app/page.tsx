import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/image/logo.png"
      alt="MACOPOC logo"
      width={260}
      height={38}
      priority
    />
  );
}
