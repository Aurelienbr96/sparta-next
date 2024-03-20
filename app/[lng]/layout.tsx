import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { ReactNode } from "react";
import { ComponentWithLng } from "../i18n/types";

export const metadata: Metadata = {
  title: "Sparta",
  description: "Next level fitness",
};

interface StaticParams {
  lng: string;
}

type RootLayoutProps = {
  children: ReactNode;
} & ComponentWithLng;

export async function generateStaticParams(): Promise<StaticParams[]> {
  return languages.map((lng) => ({ lng }));
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng) as "ltr" | "rtl"}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
