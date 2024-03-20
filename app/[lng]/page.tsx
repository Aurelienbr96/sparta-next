import React from "react";
import Image from "next/image";
import { montserrat } from "./ui/fonts";
import { Input } from "./ui/form";
import { Button } from "./ui/buttons/Button";

import { useTranslation } from "../i18n";
import { ComponentWithLng } from "../i18n/types";

type Props = {} & ComponentWithLng;

async function Home({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng);
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="flex p-7 flex-grow-1 flex-col items-center md:items-start">
        <Image src="/sparta-logo.png" width={256} height={177} alt="Sparta logo" />
        <h1 className={`${montserrat.className} text-title-2xl text-white font-bold`}>SPARTA</h1>
        <h1
          className={`${montserrat.className} mt-11 hidden lg:block text-title-xl text-white text-center lg:text-left lg:w-[405px] text-wrap`}
        >
          {t("login-page.title")}
        </h1>
      </div>
      <div className="flex flex-grow-2 lg:bg-white w-full flex-col lg:pt-52 items-center">
        <h1 className="text-title-2xl font-bold">Login</h1>
        <Input placeholder="email@gmail.com" className="mt-20 w-96" />
        <Input type="password" placeholder="password" className="mt-4 w-96" />
        <p className="mt-6">Forgot password ?</p>
        <Button className="w-96 mt-5">Sign in with Email</Button>
      </div>
    </main>
  );
}

export default Home;