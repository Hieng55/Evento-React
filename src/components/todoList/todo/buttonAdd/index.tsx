import { TypeProps } from "../../interface";
import { StyleAdd } from "./style";

const ButtonAdd: React.FC<Pick<TypeProps, "onClick">> = ({ onClick }) => {
  return (
    <StyleAdd onClick={onClick} type="button">
      ADD TODO
    </StyleAdd>
  );
};

export default ButtonAdd;
