import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as SendIcon } from "../../assets/SendIcon.svg";

import { setMessage, setResponse } from "../../store/reducers/chatSlice";

const ChatInput = () => {
	//states and refs for styling input box
	const [inputText, setInputText] = useState("");
	const textareaRef = useRef(null);
	const divRef = useRef(null);

	//State for storing value
	const [submittedMessage, setSubmittedMessage] = useState("");

	//State getter & setter
	const chat = useSelector((state) => state.chat);
	const dispatch = useDispatch();

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
	}, [inputText]);

	//Fetching the response API to get response
	useEffect(() => {
		console.log("render");
		if (chat.chatData[0].response !== "") {
			const argObj = { message: submittedMessage, response: "second response" };
			dispatch(setResponse(argObj));
			setSubmittedMessage("");
		} else {
			const argObj = { message: submittedMessage, response: "response" };
			dispatch(setResponse(argObj));
			setSubmittedMessage("");
		}
	}, [submittedMessage]);

	//storing user input in local state
	const handleInputChange = (event) => {
		setInputText(event.target.value);
	};

	//storing user input in global store
	const handleMessageSubmit = (event) => {
		event.preventDefault();
		const inputValue = event.target.textarea.value;
		dispatch(setMessage(inputValue));
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
