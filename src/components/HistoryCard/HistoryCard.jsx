import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Delete from "../Delete/Delete";

import { ReactComponent as ChatIcon } from "../../assets/ChatIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/Delete.svg";
import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";

import { deleteChatAPI, updateTitleAPI } from "../../utils/BackendLinks";

import { editTitle, deleteTitle } from "../../store/reducers/chatListSlice";
import { setChat } from "../../store/reducers/chatSlice";

const HistoryCard = ({ title, chatId }) => {
	//Local State to manage changes locally
	const [currentTitle, setCurrentTitle] = useState(title);
	const [disabled, setDisabled] = useState(true);
	const [submittedTitle, setSubmittedTitle] = useState("New Chat");
	const [deleteClicked, setDeleteClicked] = useState(false);

	//iseNavigate to redirect between different chats
	const navigate = useNavigate();

	//inputRef to focus white on edit click
	const inputRef = useRef(null);

	//state and Dispatch function to change global state
	const user = useSelector((state) => state.user);
	const titles = useSelector((state) => state.titles.chatTitles);
	const chat = useSelector((state) => state.chat);

	const dispatch = useDispatch();

	//! Styling side effects
	//Changing focus based on local state disabled
	useEffect(() => {
		if (!disabled) {
			inputRef.current.focus();
		}
	}, [disabled]);

	//Navigating to chat/ page when user delete any chat
	useEffect(() => {
		navigate("/chat");
	}, [titles.length]);

	//!API Call
	//Title update API Call
	useEffect(() => {
		const fetchUpdateTitleAPI = async () => {
			try {
				const response = await axios.put(updateTitleAPI, { email: user.email, chatId: chatId, chatTitle: submittedTitle });
				if (response.status === 200) {
					dispatch(editTitle({ title: response.data.message.chatTitle, chatId: chatId }));
					setSubmittedTitle("New Chat");
				}
			} catch (error) {
				console.error(error.message);
			}
		};
		if (chat.chatData[0]?.response !== "" && chat.chatData.length > 0 && submittedTitle !== "New Chat" && submittedTitle !== "") {
			fetchUpdateTitleAPI();
		}
	}, [submittedTitle, chat.chatTitle]);

	useEffect(() => {
		const fetchDeleteChatAPI = async () => {
			try {
				const result = await axios.delete(`${deleteChatAPI}?email=${user.email}&chatId=${chatId}`);
				if (result.status === 200) {
					dispatch(deleteTitle({ chatId: chatId }));
					setDeleteClicked(false);
				}
			} catch (error) {
				console.error(error.message);
			}
		};
		if (deleteClicked) {
			fetchDeleteChatAPI();
		}
	}, [deleteClicked]);

	useEffect(() => {
		setCurrentTitle(title);
	}, []);

	//! Event handlers
	//Function to navigate between different chats based on chatID
	const handleChatClick = () => {
		dispatch(setChat({ email: user.email, ...chat }));
		navigate(`${chatId}`);
	};

	const handleDeleteChat = () => {
		setDeleteClicked(true);
	};

	//function to handle Edit icon click
	const handleEditTitle = () => {
		setDisabled(false);
		dispatch(editTitle({ title: "New Chat", chatId: chatId }));
		setCurrentTitle("");
	};

	//Function to take effect on title after form submission
	const handleEditTitleSubmit = (event) => {
		event.preventDefault();
		const newTitle = event.target.title.value;
		setSubmittedTitle(newTitle);
		dispatch(editTitle({ title: newTitle, chatId: chatId }));
		setDisabled(true);
	};

	//Funtion to handle close icon click
	const handleCloseEdit = () => {
		setDisabled(true);
		dispatch(editTitle({ title: currentTitle, chatId: chatId }));
	};

	//function to show typed character visually in title input
	const handleTitleChange = (event) => {
		setCurrentTitle(event.target.value);
	};

	return (
		<form
			onSubmit={handleEditTitleSubmit}
			onClick={handleChatClick}
			className="relative w-full min-h-[40px] h-10 bg-ghostWhite rounded-lg text-blackMagic flex justify-start items-center px-2 cursor-pointer mb-1 z-[2]"
		>
			<ChatIcon className="absolute left-2 w-5 h-5" />

			<input
				ref={inputRef}
				className={`ml-5 p-1 w-full mr-14 max-w-[200px] text-sm md:text-base whitespace-nowrap text-ellipsis overflow-hidden bg-[transparent] outline-none 
				${!disabled ? "cursor-text" : "cursor-default"}
				`}
				value={currentTitle}
				name="title"
				onChange={handleTitleChange}
				disabled={disabled}
			/>

			{disabled ? (
				<>
					<EditIcon className="absolute right-8 w-5 h-5 cursor-pointer  z-[3]" onClick={handleEditTitle} />
					<DeleteIcon className="absolute right-2 w-5 h-5 cursor-pointer  z-[3]" onClick={handleDeleteChat} />
				</>
			) : (
				<>
					<button type="submit" className="absolute right-8 w-5 h-5 cursor-pointer border-none outline-none bg-[transparent] text-2xl flex justify-center items-center z-[3]">
						&#10003;
					</button>
					<button
						className="absolute right-2 w-5 h-5 cursor-pointer border-none outline-none bg-[transparent] text-xl font-semibold flex justify-center items-center z-[3]"
						onClick={handleCloseEdit}
					>
						&#10006;
					</button>
				</>
			)}
		</form>
	);
};

export default HistoryCard;
