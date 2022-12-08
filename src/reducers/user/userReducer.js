import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  email:"",
  fullName:"",
  token:""
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    unSetUser: (state) => {
      state.email = "" ;
      state.fullName = "" ;
      state.token = "" ;
    }
  }
})

export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;