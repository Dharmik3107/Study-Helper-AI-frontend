import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

import { setChat } from "../../store/reducers/chatSlice";
import { addToChatList } from "../../store/reducers/chatListSlice";

import { GetChatAPI } from "../../utils/BackendLinks";

const initialChatData = {
	email: "",
	chatId: "",
	chatTitle: "",
	subject: "",
	chatData: [],
};

const SubjectButton = ({ text, value }) => {
	const [chatData, setChatData] = useState(initialChatData);
	const [uniqueId, setUniqueId] = useState("");

	const user = useSelector((state) => state.user);
	const titles = useSelector((state) => state.titles.chatTitles);
	const chat = useSelector((state) => state.chat);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleSubjectClick = (event) => {
		const selectedSubject = event.target.value;
		const newUniqueID = "newchat";
		setChatData((chatData) => ({ ...chatData, email: user.email, chatId: newUniqueID, subject: selectedSubject }));
		setUniqueId(newUniqueID);
	};

	useEffect(() => {
		if (uniqueId !== "") {
			dispatch(setChat(chatData));
			dispatch(addToChatList({ chatId: "newchat" }));
			setUniqueId("");
		}
	}, [uniqueId]);

	return (
		<button
			value={value}
			onClick={handleSubjectClick}
			className="w-full max-w-[180px] h-12 border-2 border-solid border-ghostWhite transition-all duration-300 capitalize hover:bg-[rgba(0,0,0,0.25)]"
		>
			{text}
		</button>
	);
};

export default SubjectButton;
