import React from "react";
import { PropsChildren } from "./interface";

export function childrenUpdate({ children, infoLogin, setInfoLogin }: PropsChildren): React.ReactNode {
  const updatedChildren = React.Children.map(children, (child) => {

    if (React.isValidElement(child)) {
      const propsWithLoginInfo = { infoLogin, setInfoLogin };
      return React.cloneElement(child, propsWithLoginInfo);
    }
    
    return child;
  });

  return updatedChildren;
}
