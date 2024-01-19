import {  UseHandleAddProps } from "../../interface";
export function useHandelAdd({ value, setValue, setListItem, listItems }: UseHandleAddProps) {
  const handelAdd = () => {
    setListItem([...listItems, { value }]);
    setValue("");
  };

  return { handelAdd };
}
