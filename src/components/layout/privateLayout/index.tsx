import Header from "../header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getInfoLogin } from "@/utils";
import { TInfoLogin } from "@/pages/login/interface";
import { childrenUpdate } from "./updateChildren";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [infoLogin, setInfoLogin] = useState<TInfoLogin | null>(null);
  const updatedChildren = childrenUpdate({ children, infoLogin });
  
  useEffect(() => {
    const token: TInfoLogin = getInfoLogin();
    !token.access_token ? router.push("/login") : setInfoLogin(token);
  }, [router]);

  
  return (
    <>
      <header>
        <Header infoLogin={infoLogin} />
      </header>
      <main className="mt-24 mb-16">{updatedChildren}</main>
      <footer className="w-full bg-ctBlue7 text-center text-white py-3">Next.js demo by Hien Pro</footer>
    </>
  );
}
