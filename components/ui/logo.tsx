import Image from "next/image";
import Link from "next/link";
import Icon from "@/public/images/assets/5.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={Icon} alt="Icon Kelas" className="w-32" />
    </Link>
  );
}
