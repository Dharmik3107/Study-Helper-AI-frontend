import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	promptString: "",
};

export const promptSlice = createSlice({
	name: "prompt",
	initialState,
	reducers: {
		setPromptValue: (state, value) => {
			state.promptString = value.payload;
		},
	},
});

export const { setPromptValue } = promptSlice.actions;

export default promptSlice.reducer;
