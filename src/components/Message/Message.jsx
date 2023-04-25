import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
	return (
		<div className="w-full h-fit my-2 flex justify-end items-center">
			<div className="w-[80%] md:w-fit md:max-w-[300px] lg:max-w-[400px] bg-periwinkle p-3 rounded-lg">{message}</div>
		</div>
	);
};

export default Message;
