import { TypeProps } from "../../interface";
import { StyleBtnDel } from "./style";

export const HandelDelete:React.FC<Pick<TypeProps,"onClick">> = ({onClick}) => {
  return (
    <>
      <StyleBtnDel onClick={onClick} className="btn-delete">DELETE</StyleBtnDel>
    </>
  );
};
