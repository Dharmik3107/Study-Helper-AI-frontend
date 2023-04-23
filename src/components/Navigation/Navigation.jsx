import React from "react";

import Search from "../Search/Search";
import Profile from "../Profile/Profile";

const Navigation = () => {
	return (
		<div className="w-full h-full flex justify-between items-center px-2 sm:px-5">
			<Search />
			<Profile />
		</div>
	);
};

export default Navigation;
