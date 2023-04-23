import React from "react";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";

const ChatBox = () => {
	return (
		<div className="relative w-full h-full p-1 lg:p-5">
			<div className="relative w-full h-full bg-ghostWhite rounded-lg text-blackMagic p-1 flex flex-col justify-between item-center">
				<ChatHeader />
				<ChatInput />
			</div>
		</div>
	);
};

export default ChatBox;
