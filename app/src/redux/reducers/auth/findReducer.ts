import { createSlice } from "@reduxjs/toolkit";
import FindModel from "src/models/auth/find.model";
import { RootState } from "../../store";

export interface FindState {
  model: FindModel;
  errorField: ErrorField[];
}

export interface ErrorField {
  field: string;
  error: string;
  reject: string;
}

const initialState: FindState = {
  model: { ...new FindModel() },
  errorField: [],
};

export const findSlice = createSlice({
  name: "find",
  initialState,
  reducers: {
    changeFindValue: (state, action) => {
      const { id, value } = action.payload;
      state.model[id] = value;
    },
    postFind: (state, action) => {
      state.errorField = action.payload.data.fieldErrorList;
    },
  },
});

export const { changeFindValue, postFind } = findSlice.actions;
export const selectFindState = (state: RootState) => state.find;
export default findSlice.reducer;
