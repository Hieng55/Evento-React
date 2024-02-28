import Layout from "@/components/layout/privateLayout";
import { getData } from "@/services/callApi";
import React, { useEffect, useState } from "react";
import { TInfoLogin } from "./login/interface";
import Button from "@/shared/button";

const Home = ({ infoLogin }: { infoLogin: TInfoLogin | null }) => {
  const [users, setUsers] = useState<TInfoLogin[]>([]);

  useEffect(() => {
    if (infoLogin?.access_token) {
      getData("users", infoLogin.access_token)
        .then((response) => {
          setUsers(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [infoLogin?.access_token]);

  return (
    <div className="text-center text-3xl text-green-600 ">
      HELLO WELCOME TO ADMIN PAGE
      <div className="render-users flex items-center gap-3 justify-center mt-5">
        {users.map((user, index) => {
          return (
            <div key={index} className="user bg-green-500 text-white p-2 rounded-lg">
              <h5 className="text-lg">Email: {user.email || "anonymous"}</h5>
              <Button types="error" className="p-2 text-base rounded-lg ">
                Delete
              </Button>
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
