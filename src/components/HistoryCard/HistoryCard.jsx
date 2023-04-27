import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as ChatIcon } from "../../assets/ChatIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/Delete.svg";
import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";

import { updateTitleAPI } from "../../utils/BackendLinks";

const DEFAULT_CHAT_VALUE = "Title of the chat";

const HistoryCard = () => {
	const [value, setValue] = useState(DEFAULT_CHAT_VALUE);
	const [disabled, setDisabled] = useState(true);

	const inputRef = useRef(null);
	const handleEditTitle = () => {
		setDisabled(false);
		setValue("");
	};

	const handleTitleInput = (event) => {
		setValue(event.target.value);
	};

	const handleCloseEdit = () => {
		setDisabled(true);
		setValue(DEFAULT_CHAT_VALUE);
	};

	useEffect(() => {
		if (!disabled) {
			inputRef.current.focus();
		}
	}, [disabled]);

	return (
		<div className="relative w-full h-10 bg-ghostWhite rounded-lg text-blackMagic flex justify-start items-center px-2 cursor-pointer mb-1">
			<ChatIcon className="absolute left-2 w-5 h-5" />
			<input
				ref={inputRef}
				className={`ml-5 p-1 w-full mr-14 max-w-[200px] text-sm md:text-base whitespace-nowrap text-ellipsis overflow-hidden bg-[transparent] outline-none ${
					!disabled ? "cursor-text" : "cursor-pointer"
				}`}
				value={value}
				disabled={disabled}
				onChange={handleTitleInput}
			/>
			{disabled ? (
				<EditIcon className="absolute right-8 w-5 h-5 cursor-pointer" onClick={handleEditTitle} />
			) : (
				<button className="absolute right-8 w-5 h-5 cursor-pointer border-none outline-none bg-[transparent] text-2xl flex justify-center items-center">&#10003;</button>
			)}
			{disabled ? (
				<DeleteIcon className="absolute right-2 w-5 h-5 cursor-pointer" />
			) : (
				<button className="absolute right-2 w-5 h-5 cursor-pointer border-none outline-none bg-[transparent] text-xl font-semibold flex justify-center items-center" onClick={handleCloseEdit}>
					&#10006;
				</button>
			)}
		</div>
	);
};

export default HistoryCard;
