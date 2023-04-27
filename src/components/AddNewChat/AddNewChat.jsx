import React from "react";

import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";

const AddNewChat = () => {
	return (
		<div className="relative w-full h-10 border-2 border-solid border-ghostWhite text-ghostWhite rounded-lg flex justify-start items-center px-2 cursor-pointer mb-1">
			<div className="text-xl">&#10011;</div>
			<h5 className="ml-1 p-1 w-full mr-14 max-w-[200px] text-sm md:text-base whitespace-nowrap text-ellipsis overflow-hidden">Add new chat</h5>
			<EditIcon className="absolute right-2 w-5 h-5 cursor-pointer" />
		</div>
	);
};

export default AddNewChat;
