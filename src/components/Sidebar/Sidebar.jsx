import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import HistoryCard from "../HistoryCard/HistoryCard";
import AddNewChat from "../AddNewChat/AddNewChat";
import Logout from "../Logout/Logout";

import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import Search from "../Search/Search";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
	const url = useLocation().pathname;

	const titles = useSelector((state) => state.titles.chatTitles);
	const searchValue = useSelector((state) => state.search.searchString);

	//Sideeffect for User Exoerience
	useEffect(() => {
		setSidebarOpen(false);
	}, [url]);

	const memoizedHistoryCardArray = useMemo(() => {
		return titles
			.filter((element) => {
				return element.title.includes(searchValue);
			})
			.map((element) => {
				return <HistoryCard key={element.chatId} title={element.title} chatId={element.chatId} />;
			});
	}, [titles[0], titles.length, searchValue]);

	const handleBackClick = () => {
		setSidebarOpen(false);
	};
	const handleBlurSidebar = () => {
		setSidebarOpen(false);
	};

	return (
		<div className={`nonactive-chatlist bg-darkGray rounded-tr-xl rounded-br-xl px-2 ${isSidebarOpen ? "active" : ""}`} onBlur={handleBlurSidebar}>
			<LeftArrow className="bg-[transparent] border-none outline-none absolute top-2 left-2 w-7 h-7 font-bold fill-ghostWhite" onClick={handleBackClick}></LeftArrow>
			<Search styles="flex md:hidden h-fit my-2 justify-center ml-7" />
			<AddNewChat />
			<div className="w-full h-[95%] flex flex-col justify-start items-center pb-6">
				<div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll ">{titles.length > 0 && memoizedHistoryCardArray}</div>
			</div>
			<Logout />
		</div>
	);
};

export default Sidebar;
