import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Profile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface ProfileState {
  profile: Profile | null;
}

const initialState: ProfileState = {
  profile: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
    },
  },
});
