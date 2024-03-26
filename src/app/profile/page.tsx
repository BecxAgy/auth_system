"use client";
import useUser from "@/hooks/useUser";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const { data } = useUser();

  return data && <div>{data.username}</div>;
};

export default page;
