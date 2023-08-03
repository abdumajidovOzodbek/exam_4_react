import { configureStore } from "@reduxjs/toolkit";
import Slice from "./dataSlice";
// import Slice from "./dataSlice";
import Slice2 from "./favoriteData";
import uiSlice2 from "./toogle";

import uiSlice from "./ui";

const store = configureStore({
  reducer: {
    dataSlice: Slice.reducer,
    ui: uiSlice.reducer,
    toggle: uiSlice2.reducer,
    dataSlice2: Slice2.reducer,
  },
});
export default store;
