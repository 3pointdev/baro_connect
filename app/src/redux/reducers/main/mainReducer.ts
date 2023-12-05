import { createSlice } from "@reduxjs/toolkit";
import BannerModel from "src/models/main/banner.model";
import MenuModel from "src/models/main/menu.model";
import { RootState } from "../../store";

export interface MainState {
  menuList: MenuModel[];
  bannerList: BannerModel[];
}

const initialState: MainState = {
  menuList: [
    { id: 1, title: "menu 1", url: "/" },
    { id: 2, title: "menu 2", url: "/" },
    { id: 3, title: "menu 3", url: "/" },
    { id: 4, title: "menu 4", url: "/" },
    { id: 5, title: "menu 5", url: "/" },
    { id: 6, title: "menu 6", url: "/" },
    { id: 7, title: "menu 7", url: "/" },
    { id: 8, title: "menu 8", url: "/" },
  ],
  bannerList: [
    {
      id: 1,
      title: "Banner 1",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
    {
      id: 2,
      title: "Banner 2",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
    {
      id: 3,
      title: "Banner 3",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
    {
      id: 4,
      title: "Banner 4",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
    {
      id: 5,
      title: "Banner 5",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
    {
      id: 6,
      title: "Banner 6",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
    {
      id: 7,
      title: "Banner 7",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
    {
      id: 8,
      title: "Banner 8",
      url: "/",
      image: "https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png",
    },
  ],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
});

export const {} = mainSlice.actions;
export const selectMainState = (state: RootState) => state.main;
export default mainSlice.reducer;
