export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
}

const API_BASE_URL = "http://localhost:5000/formData";

// Unified response handler
const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  const data = await response.json();
  if (!response.ok) {
    throw { message: data.message || "Something went wrong", status: response.status };
  }
  return {
    data,
    message: data.message || "Request was successful",
    status: response.status,
  };
};

// Unified error handler
const handleError = async (error: ApiError): Promise<void> => {
  console.error(`API error [${error.status}]: ${error.message}`);
};

// GET
export const getData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return handleResponse<T>(response);
  } catch (error: unknown) {
    handleError(error as ApiError);
    throw error;
  }
};

// POST (send full backend schema)
export const postData = async <T, U>(data: T): Promise<ApiResponse<U>> => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse<U>(response);
  } catch (error: unknown) {
    handleError(error as ApiError);
    throw error;
  }
};

// PUT (update existing data by ID)
export const putData = async <T, U>(endpoint: string | null, data: T): Promise<ApiResponse<U>> => {
  if (!endpoint) throw new Error("PUT endpoint cannot be null");
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse<U>(response);
  } catch (error: unknown) {
    handleError(error as ApiError);
    throw error;
  }
};

// DELETE
export const deleteData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { method: "DELETE" });
    return handleResponse<T>(response);
  } catch (error: unknown) {
    handleError(error as ApiError);
    throw error;
  }
};