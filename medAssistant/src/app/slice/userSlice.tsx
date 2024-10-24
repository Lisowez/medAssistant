import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setName, setPassword } = userSlice.actions;

export default userSlice.reducer;

export const selectName = (state: any) => state.user.name;
export const selectPass = (state: any) => state.user.password;
