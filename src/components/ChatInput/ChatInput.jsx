import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ReactComponent as SendIcon } from "../../assets/SendIcon.svg";

import { setChat, setMessage, setResponse } from "../../store/reducers/chatSlice";
import { editTitle, setChatId } from "../../store/reducers/chatListSlice";

import { GetResponseAPI } from "../../utils/BackendLinks";

const ChatInput = () => {
	//states and refs for styling input box
	const [inputText, setInputText] = useState("");
	const textareaRef = useRef(null);
	const divRef = useRef(null);

	const newUniqueId = uuidv4();

	//State for storing value
	const [submittedMessage, setSubmittedMessage] = useState("");
	const [messageId, setMessageId] = useState("");

	//State getter & setter
	const chat = useSelector((state) => state.chat);
	const titles = useSelector((state) => state.titles.chatTitles);
	const user = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	//!Style side effects
	//Changing the size of input box based on user input text size
	useEffect(() => {
		if (inputText.length > 0) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
			divRef.current.style.height = "auto";
			divRef.current.style.height = `${divRef.current.scrollHeight}px`;
		} else {
			divRef.current.style.height = "48px";
		}
	}, [inputText.length % 5 === 0]);

	//! API Calling
	//Fetching the response API to get response
	useEffect(() => {
		const fetchNewChatAPI = async () => {
			try {
				const apiData = { email: user.email, message: submittedMessage, chatId: newUniqueId, messageId: messageId, subject: chat.subject };
				const result = await axios.post(GetResponseAPI, apiData);
				const resultArray = result.data.message.chatData;
				const [response] = resultArray.filter((response) => messageId === response.messageId);
				const editedResponse = response.response;
				dispatch(setResponse({ messageId: messageId, response: editedResponse }));
				dispatch(setChat(result.data.message));
				// dispatch(setChatId(result.data.message.chatId));
				if (titles[0].chatId === "newchat") {
					dispatch(setChatId(newUniqueId));
					dispatch(editTitle({ title: result.data.message.chatTitle, chatId: newUniqueId }));
				}
			} catch (error) {
				console.error(error.message);
			}
		};
		if (chat.chatData.length > 0 && user.email !== "" && submittedMessage !== "" && chat.chatId !== "newchat") {
			fetchNewChatAPI();
		}
	}, [chat.chatData.length, submittedMessage]);

	//! Event Handlers
	//storing user input in local state
	const handleInputChange = (event) => {
		setInputText(event.target.value);
	};

	//storing user input in global store
	const handleMessageSubmit = (event) => {
		event.preventDefault();
		const inputValue = event.target.textarea.value;
		const messageId = uuidv4();
		setMessageId(messageId);
		dispatch(setChat({ ...chat, chatId: newUniqueId }));
		dispatch(setMessage({ messageId: messageId, message: inputValue }));
		setSubmittedMessage(inputValue);
		setInputText("");
	};

	return (
		<form onSubmit={handleMessageSubmit} ref={divRef} className="absolute bottom-1 left-1 w-[calc(100%_-_8px)] bg-blackMagic rounded-lg pl-1 pr-10 flex flex-col py-[10px]">
			<textarea
				ref={textareaRef}
				className="w-full bg-[transparent] outline-none resize-none text-sm text-ghostWhite md:text-base indent-2"
				style={{ height: "24px", maxHeight: "150px", overflowY: `${inputText.length > 0 ? "auto" : "hidden"}` }}
				placeholder="Type your doubts here..."
				value={inputText}
				onChange={handleInputChange}
				name="textarea"
			/>
			<button type="submit" className="absolute top-1/2 right-2 w-6 h-6 -translate-y-1/2 cursor-pointer">
				<SendIcon className="w-full h-full" />
			</button>
		</form>
	);
};

export default ChatInput;
