import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
	otp: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserCredentials: (state, value) => {
			return { ...state, email: value.payload.email, otp: value.payload.otp };
		},
	},
});

export const { setUserCredentials } = userSlice.actions;

export default userSlice.reducer;
