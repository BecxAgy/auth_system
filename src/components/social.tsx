"use client";

import React from "react";
//import { signIn } from "next-auth/react";
import { FaMicrosoft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import microsoft from "../../public/microsoft.svg";
import Image from "next/image";

const Social = () => {
  const onClick = (provider: "azure") => {
    //signIn(provider, { callbackUrl: "/" });
  };
  return (
    <div className="flex w-full gap-x-2  justify-center items-center">
      <Button
        size={"lg"}
        className=""
        variant={"outline"}
        onClick={() => onClick("azure")}
      >
        <Image alt="microsoft icon" src={microsoft} height={40} width={40} />
      </Button>
    </div>
  );
};

export default Social;
