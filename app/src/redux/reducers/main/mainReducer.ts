import {
  faBoxOpen,
  faComment,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";
import pageUrlConfig from "config/pageUrl.config";
import BannerModel from "src/models/main/banner.model";
import MenuModel from "src/models/main/menu.model";
import { RootState } from "../../store";

export interface MainState {
  menuList: MenuModel[];
  bannerList: BannerModel[];
}

const initialState: MainState = {
  menuList: [
    { id: 1, title: "Home", url: pageUrlConfig.home, icon: faHome },
    { id: 2, title: "Products", url: pageUrlConfig.product, icon: faList },
    { id: 3, title: "Tasks", url: pageUrlConfig.task, icon: faBoxOpen },
    { id: 4, title: "Chat", url: pageUrlConfig.chat, icon: faComment },
    { id: 5, title: "User", url: pageUrlConfig.user, icon: faUser },
  ],
  bannerList: [
    {
      id: 1,
      title: "생산모니터링",
      subTitle: "요청한 제품의 생산을 실시간으로 확인하세요",
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
