import { TInfoLogin, TInput } from "@/pages/login/interface";

const LOGIN_KEY = "LOGIN";
export function setLogin(infoLogin: TInfoLogin) {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(infoLogin));
}
export function getInfoLogin() {
  const storedData = localStorage.getItem(LOGIN_KEY);
  return storedData ? JSON.parse(storedData) : {};
}

export function removeInfoLogin() {
  localStorage.removeItem(LOGIN_KEY);
}
