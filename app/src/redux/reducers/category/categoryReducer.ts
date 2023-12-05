import { createSlice } from "@reduxjs/toolkit";
import CategoryModel from "src/models/category/category.model";
import { RootState } from "../../store";

export interface MainState {
  categoryList: CategoryModel[];
}

const initialState: MainState = {
  categoryList: [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
    { id: 4, title: "Category 4" },
    { id: 5, title: "Category 5" },
    { id: 6, title: "Category 6" },
    { id: 7, title: "Category 7" },
    { id: 8, title: "Category 8" },
  ],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export const {} = categorySlice.actions;
export const selectCategoryState = (state: RootState) => state.category;
export default categorySlice.reducer;
