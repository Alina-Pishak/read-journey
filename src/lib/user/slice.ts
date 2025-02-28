import { createSlice } from "@reduxjs/toolkit";

import { registerUserThunk } from "./thunks";

import { IUSerState } from "@/types/user/user";

const initialState: IUSerState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
