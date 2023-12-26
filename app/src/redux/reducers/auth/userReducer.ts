import { createSlice } from "@reduxjs/toolkit";
import UserModel from "src/models/user/user.model";
import { RootState } from "../../store";

export interface UserState {
  isLogin: boolean;
  model: UserModel;
  isMobile: boolean;
}

const initialState: UserState = {
  model: { ...new UserModel() },
  isLogin: false,
  isMobile: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      console.log(action.payload);
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = userSlice.actions;
export const selectUserState = (state: RootState) => state.user;
export default userSlice.reducer;
