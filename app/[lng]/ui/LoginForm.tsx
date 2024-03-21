"use client";

import { authenticate } from "@/app/lib/actions";
import { Button } from "@/app/ui/buttons/Button";
import { Input } from "@/app/ui/form";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="flex flex-grow-2 lg:bg-white w-full flex-col lg:pt-52 items-center">
      <h1 className="text-title-2xl font-bold">Login</h1>
      <Input placeholder="email@gmail.com" className="mt-20 w-96" id="email" type="email" name="email" />
      <Input type="password" placeholder="password" className="mt-4 w-96" id="password" name="password" />
      <p className="mt-6">Forgot password ?</p>
      <LoginButton />
      <p className="text-red">{errorMessage}</p>
    </form>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-96 mt-5">
      {pending ? "Loading..." : "Sign in with Email"}
    </Button>
  );
};

export default LoginForm;
