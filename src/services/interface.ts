export interface ApiResponse {
  id: number | string;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface TPagination {
  _page: number;
  _limit: number;
  _totalRows: number;
}
