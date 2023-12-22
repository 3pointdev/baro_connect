import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { findSlice } from "./reducers/auth/findReducer";
import { joinSlice } from "./reducers/auth/joinReducer";
import { loginSlice } from "./reducers/auth/loginReducer";
import { userSlice } from "./reducers/auth/userReducer";
import { contactSlice } from "./reducers/contact/contactReducer";
import { mainSlice } from "./reducers/main/mainReducer";
import { productSlice } from "./reducers/product/productReducer";

const rootReducer = combineReducers({
  [joinSlice.name]: joinSlice.reducer,
  [loginSlice.name]: loginSlice.reducer,
  [findSlice.name]: findSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [mainSlice.name]: mainSlice.reducer,
  [contactSlice.name]: contactSlice.reducer,
  [productSlice.name]: productSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  });

const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore);
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
