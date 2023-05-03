import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./reducers/searchSlice";
import promptReducer from "./reducers/promptSlice";
import userReducer from "./reducers/userSlice";
import chatReducer from "./reducers/chatSlice";
import chatListReducer from "./reducers/chatListSlice";

export const store = configureStore({
	reducer: {
		search: searchReducer,
		prompt: promptReducer,
		user: userReducer,
		chat: chatReducer,
		titles: chatListReducer,
	},
});
