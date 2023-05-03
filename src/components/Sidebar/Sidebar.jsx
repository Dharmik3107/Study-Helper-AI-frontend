import React from "react";
import HistoryCard from "../HistoryCard/HistoryCard";
import AddNewChat from "../AddNewChat/AddNewChat";
import Logout from "../Logout/Logout";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
	const handleBackClick = () => {
		setSidebarOpen(false);
	};
	const handleBlurSidebar = () => {
		setSidebarOpen(false);
	};
	return (
		<div className={`nonactive-chatlist bg-darkGray rounded-tr-xl rounded-br-xl pt-14 pb-6 px-2 ${isSidebarOpen ? "active" : ""}`} onBlur={handleBlurSidebar}>
			<button className="bg-[transparent] border-none outline-none absolute top-2 left-2 w-5 h-5 text-4xl font-bold text-antiqueWhite" onClick={handleBackClick}>
				&#8678;
			</button>
			<div className="w-full h-[95%] flex flex-col justify-start items-center overflow-y-scroll">
				<AddNewChat />
				{/* <HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
				<HistoryCard /> */}
				<Logout />
			</div>
		</div>
	);
};

export default Sidebar;
