import { TInfoLogin } from "@/pages/login/interface";

export interface PropsChildren {
  children: React.ReactNode;
  infoLogin?: TInfoLogin | null;
  setInfoLogin?: React.Dispatch<React.SetStateAction<TInfoLogin | null>>;
}
