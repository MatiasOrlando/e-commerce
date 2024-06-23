import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/ShopSlice";
import counterReducer from "../features/counter/CounterSlice";
import themeReducer from "../features/theme/Themeslice";

export default configureStore({
  reducer: {
    shop: shopReducer,
    counter: counterReducer,
    theme: themeReducer,
  },
  devTools: true,
});
