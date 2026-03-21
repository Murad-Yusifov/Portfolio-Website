import { createSlice } from "@reduxjs/toolkit";
import { deleteDataApi, getDataApi, getSingleDataApi, putDataApi, type ApiResponse } from "../../Utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { DataType } from "../../lib/data";
interface ProjectsState {
  items: DataType[];
  selected?: DataType | null;
  loading: boolean;
  error?: string;
}

interface PutDataArgs {
  id: number,
  data: DataType,
}
export const getDatas = createAsyncThunk<DataType[]>(
  "formData/getAllData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getDataApi<DataType[]>();
      return response.data
    } catch (err: unknown) {
      if (err instanceof Error) {

        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something went wrong")
    }
  }
);



export const getSingleData = createAsyncThunk<DataType, number>(
  "formData/getSingleData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getSingleDataApi<DataType>(id);
      return response.data;
    } catch (err: unknown) {
      if (err instanceof Error) {

        return rejectWithValue(err.message);
      }
      return rejectWithValue("Something went wrong")
    }
  }
);

export const deleteData = createAsyncThunk<ApiResponse<DataType>, number, { rejectValue: string }>(
  "formData/deleteData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteDataApi<DataType>(id)
      return response
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
      throw err
    }
  }
)

export const putData = createAsyncThunk<
  ApiResponse<DataType>,
  PutDataArgs,
  { rejectValue: string }
>(
  "formData/putData",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await putDataApi<DataType, DataType>(id, data);
      return response as ApiResponse<DataType>; // full ApiResponse<DataType>
    } catch (err: unknown) {
      return rejectWithValue(err instanceof Error ? err.message : "Unknown error");
    }
  }
);

const initialState: ProjectsState = {
  items: [],
  selected: null,
  loading: false,
  error: ""
}

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDatas.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getDatas.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getDatas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getSingleData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getSingleData.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(getSingleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

