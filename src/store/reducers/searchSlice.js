import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchString: "",
};

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchValue: (state, value) => {
			state.searchString = value.payload;
		},
	},
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
