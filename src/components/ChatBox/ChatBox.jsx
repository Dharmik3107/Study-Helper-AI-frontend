import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import ChatArea from "../ChatArea/ChatArea";
import Subject from "../Subject/Subject";

const ChatBox = () => {
	const chat = useSelector((state) => state.chat);

	return (
		<div className="relative w-full h-full p-1 lg:p-5">
			<div className="relative w-full h-full bg-ghostWhite rounded-lg text-blackMagic p-1 flex flex-col justify-between item-center pt-10 pb-14">
				<ChatHeader title={chat.chatTitle} subject={chat.subject} />
				<ChatArea />
				<ChatInput />
			</div>
		</div>
	);
};

export default ChatBox;
