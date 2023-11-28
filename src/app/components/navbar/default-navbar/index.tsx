import Link from "next/link";

interface Props {
  orientation: string;
}

const Orientation: { [key: string]: string } = {
  column: "text-white flex flex-col items-center gap-4 md:flex-row md:gap-8",
  row: "text-white flex gap-8",
};

const DefaultNavbar = ({ orientation }: Props) => {
  return (
    <nav>
      <ul className={Orientation[orientation]}>
        <li className="uppercase text-sm font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="uppercase text-sm font-semibold">
          <Link href="/headphones">Headphones</Link>
        </li>
        <li className="uppercase text-sm font-semibold">
          <Link href="/speakers">Speakers</Link>
        </li>
        <li className="uppercase text-sm font-semibold">
          <Link href="/earphones">Earphones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DefaultNavbar;
