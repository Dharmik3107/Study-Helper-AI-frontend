import React from "react";

import { ReactComponent as ChatIcon } from "../../assets/ChatIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/Delete.svg";
import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";

const HistoryCard = () => {
	return (
		<div className="relative w-full h-10 bg-ghostWhite rounded-lg text-blackMagic flex justify-start items-center px-2 cursor-pointer mb-1">
			<ChatIcon className="absolute left-2 w-5 h-5" />
			<h5 className="ml-5 p-1 w-full mr-14 max-w-[200px] text-sm md:text-base whitespace-nowrap text-ellipsis overflow-hidden">Title of the chat</h5>
			<EditIcon className="absolute right-8 w-5 h-5 cursor-pointer" />
			<DeleteIcon className="absolute right-2 w-5 h-5 cursor-pointer" />
		</div>
	);
};

export default HistoryCard;
