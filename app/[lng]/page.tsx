import React from "react";
import Image from "next/image";
import { montserrat } from "../ui/fonts";
import { Input } from "../ui/form";
import { Button } from "../ui/buttons/Button";
import SpartaLogo from "@/public/sparta-logo.png";

import { useTranslation } from "../i18n";
import { ComponentWithLng } from "../i18n/types";
import { PrismaClient } from "@prisma/client";
import LoginForm from "./ui/LoginForm";

type Props = {} & ComponentWithLng;

async function Home({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng);

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="flex p-7 flex-grow-1 flex-col items-center md:items-start">
        <Image src={SpartaLogo} width={256} height={177} alt="Sparta logo" />
        <h1 className={`${montserrat.className} text-title-2xl text-white font-bold`}>SPARTA</h1>
        <h1
          className={`${montserrat.className} mt-11 hidden lg:block text-title-xl text-white text-center lg:text-left lg:w-[405px] text-wrap`}
        >
          {t("login-page.title")}
        </h1>
      </div>
      <LoginForm />
    </main>
  );
}

export default Home;
