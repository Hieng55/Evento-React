import { useAppSelector } from "@/redux/hooks";
import Header from "./header";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";

export default function Layout({ children }: { children: React.ReactNode }) {
  const res = useAppSelector((state) => state.res);
  const router = useRouter();

  React.useEffect(() => {
    if (res.access_token === "") {
      router.push("/login");
    }
  }, [res, router]);

 
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-24 mb-16">{children}</main>
      <footer className="w-full bg-ctBlue7 text-center text-white py-3">Next.js demo by Hien Pro</footer>
    </>
  );
}
