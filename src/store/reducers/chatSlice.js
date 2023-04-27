import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
	chatId: "",
	chatTitle: "",
	subject: "",
	chatData: [
		{
			message: "",
			response: "",
		},
	],
};

export const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setChatTitle: (state, value) => {
			return { ...state, chatTitle: value.payload };
		},
		setMessage: (state, value) => {
			if (state.chatData[0].message !== "") {
				return { ...state, chatData: [...state.chatData, { message: value.payload, response: "" }] };
			} else return { ...state, chatData: [{ message: value.payload, response: "" }] };
		},
		setResponse: (state, value) => {
			if (state.chatData[0].message !== "") {
				const { message, response } = value.payload;
				const messageIndex = state.chatData.findIndex((msg) => msg.message === message);
				if (messageIndex !== -1) {
					state.chatData[messageIndex].response = response;
				}
				return state;
			} else return state;
		},
	},
});

export const { setChatTitle, setMessage, setResponse } = chatSlice.actions;

export default chatSlice.reducer;
