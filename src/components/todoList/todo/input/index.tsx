import { useState } from "react";
import ButtonAdd from "../buttonAdd";
import { StyleInput } from "./style";
import { useHandelAdd } from "../buttonAdd/useHandelAdd";
import { TodoItems } from "../../todoItems/items";
import { TypeProps } from "../../interface";
const TodoList = () => {
  const [value, setValue] = useState<string>("");
  const [listItems, setListItem] = useState<Pick<TypeProps, "value">[]>([]);
  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  const { handelAdd } = useHandelAdd({ value, setValue, setListItem, listItems });

  return (
    <div>
      <StyleInput>
        <div className="todo">
          <input type="text" placeholder="please todo" value={value || ""} onChange={(event) => getValue(event)} />
          <ButtonAdd onClick={handelAdd} />
        </div>
      </StyleInput>
      <TodoItems listItems={listItems} setListItem={setListItem} />
    </div>
  );
};

export default TodoList;
