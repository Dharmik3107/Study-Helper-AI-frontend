import React, { useState } from "react";

import Search from "../Search/Search";
import Profile from "../Profile/Profile";

import { ReactComponent as Hamburger } from "../../assets/Hamburger.svg";
import Sidebar from "../Sidebar/Sidebar";

const Navigation = ({ setSidebarOpen }) => {
	const handleHamburgerClick = () => {
		setSidebarOpen(true);
	};
	return (
		<>
			<div className="w-full h-full flex justify-between items-center px-2 sm:px-5">
				<Hamburger className="inline-block md:hidden w-8 h-8 mr-2" onClick={handleHamburgerClick} />
				<Search styles="hidden md:flex h-full justify-start" />
				<Profile />
			</div>
		</>
	);
};

export default Navigation;
