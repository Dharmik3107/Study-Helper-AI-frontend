import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { deleteChatAPI } from "../../utils/BackendLinks";

const Delete = ({ chatId, deleteClicked, setDeleteClicked, ...otherProps }) => {
	const user = useSelector((state) => state.user);

	useEffect(() => {
		const fetchDeleteChatAPI = async () => {
			try {
				const result = await axios.delete(deleteChatAPI, { email: user.email, chatId: chatId });
			} catch (error) {
				console.error(error);
			}
		};
		if (deleteClicked) {
			fetchDeleteChatAPI();
		}
	}, [deleteClicked]);

	return <DeleteIcon className="absolute right-2 w-5 h-5 cursor-pointer  z-[3]" {...otherProps} />;
};

export default Delete;
