import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
  email: string;
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
  },
  reducers: {
    changeEmail: (state, { payload }: PayloadAction<TPayload>) => {
      state.email = payload.email;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { changeEmail } = profileSlice.actions;
