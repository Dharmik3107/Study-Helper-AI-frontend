import React, { useRef, useState, useEffect } from "react";

import { ReactComponent as SendIcon } from "../../assets/SendIcon.svg";

const ChatInput = () => {
	const [inputText, setInputText] = useState("");
	const textareaRef = useRef(null);
	const divRef = useRef(null);

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

	const handleInputChange = (e) => {
		setInputText(e.target.value);
	};

	return (
		<div ref={divRef} className="absolute bottom-1 left-1 w-[calc(100%_-_8px)] bg-blackMagic rounded-lg pl-1 pr-10 flex flex-col py-[10px]">
			<textarea
				ref={textareaRef}
				className="w-full bg-[transparent] outline-none resize-none text-sm text-ghostWhite md:text-base indent-2"
				style={{ height: "24px", maxHeight: "150px", overflowY: `${inputText.length > 0 ? "auto" : "hidden"}` }}
				placeholder="Type your doubts here..."
				value={inputText}
				onChange={handleInputChange}
				name="textarea"
			/>
			<SendIcon className="absolute top-1/2 right-2 w-6 h-6 -translate-y-1/2 cursor-pointer" />
		</div>
	);
};

export default ChatInput;
