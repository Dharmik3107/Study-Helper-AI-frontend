import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import HistoryCard from "../HistoryCard/HistoryCard";
import Logout from "../Logout/Logout";
import AddNewChat from "../AddNewChat/AddNewChat";

import { addToChatList } from "../../store/reducers/chatListSlice";

import { getAllChatsAPI } from "../../utils/BackendLinks";

const ChatList = () => {
	// const [chatTitles, setChatTitles] = useState([]);

	const titles = useSelector((state) => state.titles.chatTitles);
	const user = useSelector((state) => state.user);
	const chat = useSelector((state) => state.chat);
	const searchValue = useSelector((state) => state.search.searchString);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		const fetchGetAllChatAPI = async () => {
			try {
				const result = await axios.get(`${getAllChatsAPI}?email=${user.email}`);
				const chatsArray = result.data.message;
				if (chatsArray.length > 0) {
					chatsArray.forEach((element) => {
						dispatch(addToChatList({ title: element.chatTitle, chatId: element.chatId }));
					});
				}
			} catch (error) {
				console.error(error);
			}
		};
		if (user.email !== "") {
			fetchGetAllChatAPI();
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (user.email !== "") {
				navigate(`${titles[0]?.chatId}`);
			}
		}, 0);
	}, [titles[0]?.chatId]);

	const memoizedHistoryCardArray = useMemo(() => {
		return titles
			.filter((element) => {
				return element.title.includes(searchValue);
			})
			.map((element) => {
				return <HistoryCard key={element.chatId} title={element.title} chatId={element.chatId} />;
			});
	}, [titles[0], titles.length, searchValue]);

	return (
		<div className="w-full h-full flex flex-col justify-start items-center overflow-scroll p-2 pb-10 z-[2]">
			<AddNewChat />
			<div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll ">{titles.length > 0 && memoizedHistoryCardArray}</div>
			<Logout />
		</div>
	);
};

export default ChatList;
