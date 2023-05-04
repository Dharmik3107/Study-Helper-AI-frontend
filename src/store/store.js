import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

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
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

window.addEventListener("beforeunload", function () {
	persistor.purge();
});
