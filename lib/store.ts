import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./features/chat/chatSlice";
import { profileSlice } from "./features/profile/profileSlice";
import { loggerMiddleware } from "./middleware";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  chat: chatSlice.reducer,
  profile: profileSlice.reducer,
});

const configureStoreConfig = {
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(loggerMiddleware),
};

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    // No persisting on the servier
    return configureStore(configureStoreConfig);
  } else {
    // Persisting on the client
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = configureStore({
      ...configureStoreConfig,
      reducer: persistedReducer,
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

export const persistor = persistStore(makeStore());
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
