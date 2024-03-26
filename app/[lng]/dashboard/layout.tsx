import { ComponentWithLng } from "@/app/i18n/types";
import { SideBar } from "./ui/SideBar";

type Props = {
  children: React.ReactNode;
} & ComponentWithLng;

export default function Layout({ children, params: { lng } }: Props) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideBar lng={lng} />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
