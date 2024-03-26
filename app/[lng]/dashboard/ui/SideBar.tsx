import Image from "next/image";
import { SignOut } from "./SignOut";
import SpartaLogo from "@/public/sparta-logo.png";
import Link from "next/link";
import { links } from "../constants/nav-links.constants";

type Props = { lng: string };

export const SideBar = ({ lng }: Props) => {
  return (
    <div className="w-full flex-none h-screen md:w-64 bg-white">
      <div className="flex flex-col h-screen justify-between items-center">
        <div>
          <Image src={SpartaLogo} width={256} height={177} alt="Sparta logo" />
          <div className="mt-6 flex flex-col">
            {links.map((link) => (
              <Link className="pl-6 py-6 border-b-2" key={link.name} href={`/${lng}${link.href}`}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-6">
          <SignOut />
        </div>
      </div>
    </div>
  );
};
