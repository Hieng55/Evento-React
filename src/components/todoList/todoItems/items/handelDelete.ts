
import { TypeProps, UseHandleAddProps } from "../../interface";

export function useHandelDelete(listItems: Pick<TypeProps, "value">[], setListItem: Pick<UseHandleAddProps, "setListItem">["setListItem"]) {
  function handelDelete(index: number) {
    const filterListItems = listItems.filter((item, itemIndex) => itemIndex !== index);
    setListItem(filterListItems);
  }

  return { handelDelete };
}
