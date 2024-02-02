import { NavLink } from "react-router-dom";
import { Button } from "../../../shared/button";
import { PropsCheckLogin } from "./interface";

export const Header = ({ params }: PropsCheckLogin) => {
  return (
    <>
      <ul className="flex gap-2">
        <li>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "text-green-500" : isPending ? "pending" : "";
            }}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "text-green-500" : isPending ? "pending" : "";
            }}
            to="/about"
          >
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "text-green-500" : isPending ? "pending" : "";
            }}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "text-green-500" : isPending ? "pending" : "";
            }}
            to="/user"
          >
            USER
          </NavLink>
        </li>
      </ul>
      <Button params={params} />
    </>
  );
};
