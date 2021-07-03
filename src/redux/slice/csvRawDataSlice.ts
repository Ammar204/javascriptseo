import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { rawData } from "../../interface";

// Define the initial state using that type
const initialState: rawData[] = [];

export const csvRawDataSlice = createSlice({
  name: "csvRawData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    UPDATE: (state, action: PayloadAction<rawData[]>) =>
      (state = action.payload),
  },
});

export const { UPDATE } = csvRawDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default csvRawDataSlice.reducer;
