import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Message from "../Message/Message";
import Response from "../Response/Response";

import { setChat } from "../../store/reducers/chatSlice";

import { GetChatAPI } from "../../utils/BackendLinks";

const ChatArea = () => {
	const chat = useSelector((state) => state.chat);
	const user = useSelector((state) => state.user);
	const titles = useSelector((state) => state.titles.chatTitles);
	const url = useParams();
	const messagesEndRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	//!API Call
	//API Calling in side effect to update title in database
	useEffect(() => {
		const fetchGetChatAPI = async () => {
			try {
				const response = await axios.get(`${GetChatAPI}?email=${user.email}&chatId=${url.chatId}`);
				console.log(response);
				if (response.status === 200) {
					dispatch(setChat(response.data.message));
				}
				if (response.status === 404) {
					navigate(`/chat/${titles[0]?.chatId}`);
				}
			} catch (error) {
				console.error(error);
			}
		};
		if (url.chatId !== "" && url.chatId !== "newchat" && user.email !== "") {
			console.log("fetchget");
			fetchGetChatAPI();
		}
	}, [url.chatId]);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [chat.chatData]);

	return (
		<div className="w-full h-full flex flex-col justify-end items-stretch">
			<div className="w-full h-full overflow-y-scroll">
				{chat.chatData.map((element) => {
					return (
						<Fragment key={element.messageId}>
							{element.message && <Message message={element.message} />}
							{element.response && <Response response={element.response} />}
						</Fragment>
					);
				})}
				<div ref={messagesEndRef} />
			</div>
		</div>
	);
};

export default ChatArea;
