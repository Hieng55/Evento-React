import { Value } from "../interface";
interface Props {
  listTodo: Value[];
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  setIndex: React.Dispatch<React.SetStateAction<string>>;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setListTodo: React.Dispatch<React.SetStateAction<Value[]>>;
  UpdateRefInput: () => void;
}

export const TodoItems: React.FC<Props> = ({ listTodo, inputRef, setIndex, setIsHidden, setListTodo, UpdateRefInput }) => {
  function handelEdit(id: string) {
    const findItem = listTodo.findIndex((item) => item.id === id);
    if (inputRef.current) {
      inputRef.current.value = listTodo[findItem].value;
    }
    setIndex(`${findItem}`);
    setIsHidden(true);
  }
  function handelDelete(id: string) {
    const filterItems = listTodo.filter((item) => item.id !== id);
    setListTodo(filterItems);
    setIsHidden(false);
    UpdateRefInput();
  }
  function handleChecked(id: string, index: number) {
    const findChecked = listTodo.find((item) => item.id === id);
    if (findChecked) {
      const newListTodo = [...listTodo];
      newListTodo[index].checked = !findChecked.checked;
      setListTodo(newListTodo);
    }
  }

  return (
    <ul>
      {listTodo.map((item, index) => {
        return (
          <li
            className="cursor-pointer bg-[orange] rounded-lg p-2 mt-2 mb-2"
            key={item.id}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
              const target = e.target as Element;
              if (!target.matches("button")) {
                handleChecked(item.id, index);
              }
            }}
          >
            <article className="flex justify-between h-12 items-center ">
              <div className="left flex gap-2">
                <input type="checkbox" checked={item.checked} onChange={() => handleChecked(item.id, index)} />
                <h5 className={`text-white ${item.checked ? "line-through text-gray-200" : ""}`}>{item.value}</h5>
              </div>
              <div className="btn h-full flex gap-1 items-center">
                <button onClick={() => handelEdit(item.id)} className="bg-lime-600 p-2 rounded-md text-white">
                  EDIT
                </button>
                <button onClick={() => handelDelete(item.id)} className="bg-red-700 p-2 rounded-md text-white">
                  DELETE
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
