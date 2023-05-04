import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage: storage,
};

export const initialState = {
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

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const { setUserCredentials } = userSlice.actions;

export default persistedReducer;
