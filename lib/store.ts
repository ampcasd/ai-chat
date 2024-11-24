import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./features/chat/chatSlice";
import { profileSlice } from "./features/profile/profileSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      chat: chatSlice.reducer,
      profile: profileSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
