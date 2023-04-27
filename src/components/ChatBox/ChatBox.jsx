import React, { useRef, useEffect } from "react";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import Message from "../Message/Message";
import Response from "../Response/Response";

const ChatBox = () => {
	const parentRef = useRef(null);
	const spanRef = useRef(null);

	return (
		<div className="relative w-full h-full p-1 lg:p-5">
			<div className="relative w-full h-full bg-ghostWhite rounded-lg text-blackMagic p-1 flex flex-col justify-between item-center pt-10 pb-14">
				<ChatHeader />
				<span className="w-full h-full overflow-y-scroll">
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
