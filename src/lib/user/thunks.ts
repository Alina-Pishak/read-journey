import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../api/user";
import { IUSer } from "@/types/user/user";

export const registerUserThunk = createAsyncThunk(
  "users/register",
  async (newUser: IUSer) => {
    const res = await registerUser(newUser);
    return res;
  }
);
