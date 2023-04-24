import React from "react";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import Message from "../Message/Message";
import Response from "../Response/Response";

const ChatBox = () => {
	return (
		<div className="relative w-full h-full max-h-[820px] p-1 lg:p-5">
			<div className="relative w-full h-full bg-ghostWhite rounded-lg text-blackMagic p-1 flex flex-col justify-between item-center pt-10 pb-14">
				<ChatHeader />
				<span className="w-full h-full max-h-[800px] overflow-y-scroll">
					<Message />
					<Response />
					<Message />
					<Message />
				</span>
				<ChatInput />
			</div>
		</div>
	);
};

export default ChatBox;
