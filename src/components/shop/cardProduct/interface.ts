import { ApiResponse } from "../../services/interFaceApi";

export interface Cart extends ApiResponse {
  quantity: number;
}
export interface PropsCards {
  data: ApiResponse[];
  setCarts: React.Dispatch<React.SetStateAction<Cart[]>>;
  carts: Cart[];
}
