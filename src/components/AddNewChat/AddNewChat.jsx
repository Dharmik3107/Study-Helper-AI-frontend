import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { addToChatList } from "../../store/reducers/chatListSlice";

const AddNewChat = () => {
	const [chatList, setChatList] = useState([]);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {}, [chatList.length]);

	const handleAddNewChatClick = () => {
		navigate(`/chat`);
	};
	return (
		<Link to="/chat/" className="w-full">
			<button
				className="relative w-full h-10 border-2 border-solid border-ghostWhite text-ghostWhite rounded-lg flex justify-start items-center px-2 cursor-pointer mb-1"
				onClick={handleAddNewChatClick}
			>
				<div className="text-xl">&#10011;</div>
				<h5 className="ml-1 p-1 w-full mr-14 max-w-[200px] text-sm md:text-base whitespace-nowrap text-ellipsis overflow-hidden">Add new chat</h5>
			</button>
		</Link>
	);
};

export default AddNewChat;
