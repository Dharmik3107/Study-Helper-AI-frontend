import React from "react";
import HistoryCard from "../HistoryCard/HistoryCard";
import Logout from "../Logout/Logout";
import AddNewChat from "../AddNewChat/AddNewChat";

const ChatList = () => {
	return (
		<div className="w-full h-full flex flex-col justify-start items-center overflow-scroll p-2">
			<AddNewChat />
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
			<Logout />
		</div>
	);
};

export default ChatList;
