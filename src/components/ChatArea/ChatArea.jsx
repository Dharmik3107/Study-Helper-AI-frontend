import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "../Message/Message";
import Response from "../Response/Response";

const ChatArea = () => {
	const chat = useSelector((state) => state.chat);
	return (
		<span className="w-full h-full flex flex-col justify-end items-stretch overflow-y-scroll">
			{chat.chatData.map((element, index) => {
				return (
					<Fragment key={index}>
						{element.message && <Message message={element.message} />}
						{element.response && <Response response={element.response} />}
					</Fragment>
				);
			})}
		</span>
	);
};

export default ChatArea;
