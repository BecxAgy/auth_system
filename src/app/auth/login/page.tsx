import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "@/components/user-login-form";
import { DiLinux } from "react-icons/di";
export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};
const LoginPage = () => {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <DiLinux className="mr-2 w-12 h-12 " />
            <span>Design System</span>
          </div>
        </div>
        <div className="lg:p-8 py-10">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Entre em sua conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Insira seu email e senha. Não tem uma conta?{" "}
                <Link
                  href="/auth/singup"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Cadastre-se
                </Link>
                .
              </p>
            </div>
            <UserAuthForm />

            <p className="px-8 text-center text-sm text-muted-foreground">
              Para continuar você deve concordar com nossos{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Serviço
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
