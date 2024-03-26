import { useState, useEffect, use } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const useUser = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return { data, logout, getUserDetails };
};

export default useUser;
