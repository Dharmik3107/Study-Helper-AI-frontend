import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSearchValue } from "../../store/reducers/searchSlice";

const Search = () => {
	const search = useSelector((state) => state.search.searchString);
	const dispatch = useDispatch();

	//Function Reset typed characters in search box to empty
	const handleResetSearch = () => {
		dispatch(setSearchValue(""));
	};

	//Function to pass input typed value to global store for further use
	const handleSearchInput = (event) => {
		dispatch(setSearchValue(event.target.value));
	};

	return (
		<div className="relative w-[200px] h-full flex justify-start items-center">
			<input
				type="search"
				placeholder="Search here..."
				className="w-[90%] sm:w-full max-w-[180px] outline-none sm:max-w-[200px] h-10 rounded-md bg-ghostWhite indent-2 text-base font-semibold text-blackMagic placeholder:font-normal placeholder:text-sm"
				onChange={handleSearchInput}
				value={search}
			/>
			{search && (
				<div className="absolute right-3 text-blackMagic" onClick={handleResetSearch}>
					&#10006;
				</div>
			)}
		</div>
	);
};

export default Search;
