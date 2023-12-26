import { createSlice } from "@reduxjs/toolkit";
import CategoryModel from "src/models/category/category.model";
import { RootState } from "../../store";

export interface ContactState {
  category: CategoryModel[];
}

const initialState: ContactState = {
  category: [
    { id: 1, title: "로그인/계정", isActive: true },
    { id: 2, title: "이용/버그" },
    { id: 3, title: "정책" },
  ],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export const {} = contactSlice.actions;
export const selectContactState = (state: RootState) => state.contact;
export default contactSlice.reducer;
