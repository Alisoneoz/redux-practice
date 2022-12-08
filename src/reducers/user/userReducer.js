import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  email:"",
  fullName:"",
  token:""
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: (state, action) => {}
})