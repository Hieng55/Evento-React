export interface TypeProps {
  value: string;
  onClick?: () => void;
  checked?: boolean;
}
export interface UseHandleAddProps {
  value: Pick<TypeProps, "value">["value"];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setListItem: React.Dispatch<React.SetStateAction<Pick<TypeProps, "value">[]>>;
  listItems: Pick<TypeProps, "value">[];
}
