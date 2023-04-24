import React from "react";
import HistoryCard from "../HistoryCard/HistoryCard";

const ChatList = () => {
	return (
		<div className="w-full h-full flex flex-col justify-start items-center overflow-scroll p-2">
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
			<HistoryCard />
		</div>
	);
};

export default ChatList;
