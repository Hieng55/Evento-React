import Layout from "@/components/layout/Layout";
import { useAppSelector } from "@/redux/hooks";
import Button from "@/shared/button";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { TInput } from "./login/interface";

const Home = () => {
  const [users, setUsers] = useState<TInput[]>([]);

  const res = useAppSelector((state) => state.res);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:8000/auth/users", {
          headers: { Authorization: `Bearer ${res.access_token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    getUser();
  }, [res.access_token]);

  return (
    <div className="text-center text-3xl text-green-600 ">
      HELLO WELCOME TO ADMIN
      <div className="render-users flex items-center gap-3 justify-center mt-5">
        {users.map((user, index) => {
          return (
            <div key={index} className="user bg-green-500 text-white p-2 rounded-lg">
              <h5 className="text-lg">Email: {user.email||"anonymous"}</h5>
              <Button className="p-2 text-base rounded-lg">Delete</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
