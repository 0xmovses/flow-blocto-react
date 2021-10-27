import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
  },
  reducers: {
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { changeEmail } = profileSlice.actions;
