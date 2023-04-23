import React from "react";

import { ReactComponent as ChatIcon } from "../../assets/ChatIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/Delete.svg";
import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";

const ChatHeader = () => {
	return (
		<div className="w-full h-10 flex justify-between items-center">
			<ChatIcon className="absolute left-2 w-5 h-5" />
			<h1 className="w-full ml-5 px-2 text-sm mr-12">Title of The Chat</h1>
			<EditIcon className="absolute right-8 w-5 h-5 cursor-pointer" />
			<DeleteIcon className="absolute right-2 w-5 h-5 cursor-pointer" />
		</div>
	);
};

export default ChatHeader;
