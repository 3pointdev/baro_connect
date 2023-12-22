import { createSlice } from "@reduxjs/toolkit";
import LoginModel from "src/models/auth/login.model";
import { RootState } from "../../store";

export interface LoginState {
  model: LoginModel;
  errorField: ErrorField[];
}

export interface ErrorField {
  field: string;
  error: string;
  reject: string;
}

const initialState: LoginState = {
  model: { ...new LoginModel() },
  errorField: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeLoginValue: (state, action) => {
      const { id, value } = action.payload;
      state.model[id] = value;
    },
    toggleAutoLogin: (state, action) => {
      state.model = { ...state.model, autoLogin: action.payload };
    },
    postLogin: (state, action) => {
      state.errorField = action.payload.data.fieldErrorList;
    },
  },
});

export const { changeLoginValue, postLogin, toggleAutoLogin } =
  loginSlice.actions;
export const selectLoginState = (state: RootState) => state.login;
export default loginSlice.reducer;
