import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { joinSlice } from "./reducers/auth/joinReducer";
import { categorySlice } from "./reducers/category/categoryReducer";
import { mainSlice } from "./reducers/main/mainReducer";
import { productSlice } from "./reducers/product/productReducer";

const rootReducer = combineReducers({
  [joinSlice.name]: joinSlice.reducer,
  [mainSlice.name]: mainSlice.reducer,
  [categorySlice.name]: categorySlice.reducer,
  [productSlice.name]: productSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  });

const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
