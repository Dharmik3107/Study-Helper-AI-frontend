import React, { useState } from "react";

const Search = () => {
	const [isUserSearching, setUserSearching] = useState(false);

	//Function to handle focus and blur to display reset icon
	const handleSearchFocus = () => {
		setUserSearching((isUserSearching) => !isUserSearching);
	};

	//Function Reset typed characters in search box to empty
	const handleResetSearch = () => {};

	return (
		<div className="relative w-[200px] h-full flex justify-start items-center">
			<input
				type="search"
				placeholder="Search here..."
				className="w-[90%] sm:w-full max-w-[180px] sm:max-w-[200px] h-10 rounded-md bg-ghostWhite indent-2 text-base font-semibold text-blackMagic placeholder:font-normal placeholder:text-sm"
				onFocus={handleSearchFocus}
				onBlur={handleSearchFocus}
			/>
			{isUserSearching && (
				<div className="absolute right-3 text-blackMagic" onClick={handleResetSearch}>
					&#10006;
				</div>
			)}
		</div>
	);
};

export default Search;
