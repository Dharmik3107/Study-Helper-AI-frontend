import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./reducers/searchSlice";
import promptReducer from "./reducers/promptSlice";

export const store = configureStore({
	reducer: {
		search: searchReducer,
		prompt: promptReducer,
	},
});
