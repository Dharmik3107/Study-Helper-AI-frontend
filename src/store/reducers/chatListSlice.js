import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	chatTitles: [],
};

export const chatListSlice = createSlice({
	name: "titles",
	initialState,
	reducers: {
		addToChatList: (state, value) => {
			const aux = [];
			const { chatId } = value.payload;
			state.chatTitles.unshift({ title: value.payload.title ? value.payload.title : "New Chat", chatId });
			const unique = state.chatTitles.filter((element) => {
				const { title, chatId } = element;
				const isExist = aux.includes(chatId);

				if (!isExist) {
					aux.push(chatId);
					return true;
				}
				return false;
			});
			state.chatTitles = unique;
			return state;
		},
		editTitle: (state, value) => {
			const editedList = state.chatTitles.map((element) => {
				if (element.chatId === value.payload.chatId) {
					return { ...element, title: value.payload.title };
				}
				return element;
			});
			state.chatTitles = editedList;
			return state;
		},
		deleteTitle: (state, value) => {
			const filteredList = state.chatTitles.filter((element) => {
				if (element.chatId !== value.payload.chatId) return element;
			});
			state.chatTitles = filteredList;
			return state;
		},
		setChatId: (state, value) => {
			if (state.chatTitles[0]?.chatId === "newchat") state.chatTitles[0].chatId = value.payload;
			return state;
		},
	},
});

export const { addToChatList, editTitle, deleteTitle, setChatId } = chatListSlice.actions;

export default chatListSlice.reducer;
