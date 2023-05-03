import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	email: "",
	chatId: "",
	chatTitle: "",
	subject: "",
	chatData: [],
};

export const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setChat: (state, value) => {
			return (state = value.payload);
		},
		setMessage: (state, value) => {
			const { messageId, message } = value.payload;
			state.chatData.push({ messageId: messageId, message: message, response: "" });
			return state;
		},
		setResponse: (state, value) => {
			const { messageId, response } = value.payload;
			const updateChatData = state.chatData.map((element) => {
				if (element.messageId === messageId) return { ...element, response: response };
				return element;
			});
			state.chatData = updateChatData;
			return state;
		},
	},
});

export const { setChat, setMessage, setResponse } = chatSlice.actions;

export default chatSlice.reducer;
