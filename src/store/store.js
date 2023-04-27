import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./reducers/searchSlice";
import promptReducer from "./reducers/promptSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
	reducer: {
		search: searchReducer,
		prompt: promptReducer,
		user: userReducer,
	},
});
