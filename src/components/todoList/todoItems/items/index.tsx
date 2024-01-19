import { TypeProps, UseHandleAddProps } from "../../interface";
import { StyleItem } from "./style";
import { HandelDelete } from "./buttonDelete/index";
import { useHandelDelete } from "./buttonDelete/handelDelete";
import { useHandelChecked } from "./checked/handelChecked";
export const TodoItems: React.FC<{ listItems: TypeProps[]; setListItem: Pick<UseHandleAddProps, "setListItem">["setListItem"] }> = ({
  listItems,
  setListItem,
}) => {
  const { handelDelete } = useHandelDelete(listItems, setListItem);
  const { handelChecked } = useHandelChecked(listItems, setListItem);

  return (
    <StyleItem>
      {listItems.map((item, index) => {
        const isItemChecked = item.checked !== undefined ? item.checked : false;
        return (
          <li key={index} className="flex items-center justify-between p-3">
            <div className="todo-left flex gap-2 items-center">
              <input type="checkbox" checked={isItemChecked} onChange={() => handelChecked(index)} />
              <span className={isItemChecked ? "active" : ""}>{item.value}</span>
            </div>
            <HandelDelete onClick={() => handelDelete(index)} />
          </li>
        );
      })}
    </StyleItem>
  );
};
