import { ApiResponse } from "../../services/interFaceApi";

export interface Cart extends ApiResponse {
  quantity: number;
}
export interface PropsCards {
  setCarts: React.Dispatch<React.SetStateAction<Cart[]>>;
  carts: Cart[];
}
