import React from "react";

import { ReactComponent as ChatIcon } from "../../assets/ChatIcon.svg";

const ChatHeader = ({ title = "New Chat", subject }) => {
	return (
		<div className="absolute top-0 left-0 w-full h-10 flex justify-between items-center">
			<ChatIcon className="absolute left-2 w-5 h-5" />
			<h1 className="w-full ml-6 px-2 text-sm mr-12">{title}</h1>
			<h5 className="absolute right-2 top-1 w-fit h-5 capitalize">{subject}</h5>
		</div>
	);
};

export default ChatHeader;
