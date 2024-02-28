import { TInfoLogin } from "@/pages/login/interface";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { childrenUpdate } from "../privateLayout/updateChildren";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const [infoLogin, setInfoLogin] = useState<TInfoLogin | null>(null);
  const router = useRouter();
  const updatedChildren = childrenUpdate({ children, setInfoLogin });

  useEffect(() => {
    if (infoLogin && infoLogin.access_token) {
      router.push("/");
    }
  }, [router, infoLogin]);

  return <>{updatedChildren}</>;
};

export default PublicLayout;
