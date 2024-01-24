import { ApiResponse } from "./interFaceApi";

const API_URL = "http://localhost:4444/api";

// GET API
const getData = async (): Promise<ApiResponse[] | null> => {
  try {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();

    
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching data from API:", error.message);
    }

    return null;
  }
};

export { getData };
