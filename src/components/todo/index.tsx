import { useRef, useState } from "react";
import { Value } from "./interface";
import { TodoItems } from "./todoItems";

export const Todo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [listTodo, setListTodo] = useState<Value[]>([]);
  const [index, setIndex] = useState<string>("");
  const [isHidden, setIsHidden] = useState<boolean>(false);
  function UpdateRefInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }
  function handleAdd() {
    if (inputRef.current) {
      if (inputRef.current.value === "") {
        alert("please enter todo input");
      } else {
        setListTodo([
          ...listTodo,
          {
            id: `${Math.floor(Math.random() * 1000)}`,
            value: inputRef.current.value,
            checked: false,
          },
        ]);
        UpdateRefInput();
      }
    }
  }
  function handleApply() {
    const findIndexApplyItem = listTodo.find((_, indexItem) => indexItem === Number(index));
    if (inputRef.current && findIndexApplyItem) {
      findIndexApplyItem.value = inputRef.current.value;
      listTodo[Number(index)] = findIndexApplyItem;
      setListTodo(listTodo);
      setIsHidden(false);
      UpdateRefInput();
    }
  }

  return (
    <div>
      <input ref={inputRef} className="h-12 pl-2 border-solid border-2 border-orange-500 rounded-md" type="text" placeholder="Enter todo" />
      {!isHidden ? (
        <button onClick={handleAdd} className="bg-lime-900 rounded-md ml-1 text-white h-12 w-24 ">
          ADD
        </button>
      ) : (
        <button onClick={handleApply} className="bg-[#ff5100] rounded-md h-12 w-24 text-white ">
          APPLY
        </button>
      )}
      <TodoItems
        setListTodo={setListTodo}
        listTodo={listTodo}
        inputRef={inputRef}
        setIndex={setIndex}
        setIsHidden={setIsHidden}
        UpdateRefInput={UpdateRefInput}
      />
    </div>
  );
};
