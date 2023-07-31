import { configureStore } from "@reduxjs/toolkit";
import pcbuilderReducer from "./features/pcbuilder/pcbuilderSlice";
export const store = configureStore({
  reducer: {
    cpbuilder: pcbuilderReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
