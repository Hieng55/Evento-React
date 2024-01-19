import { TypeProps, UseHandleAddProps } from "../../interface";

export function useHandelChecked(listItems: TypeProps[], setListItem: Pick<UseHandleAddProps, "setListItem">["setListItem"]) {
  function handelChecked(index: number) {
    const newListItems = [...listItems];
    newListItems[index]= { ...newListItems[index], checked: !newListItems[index].checked };
    setListItem(newListItems);
  }

  return { handelChecked };
}
