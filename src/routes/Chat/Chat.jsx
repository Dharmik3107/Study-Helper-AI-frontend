import React from "react";
import { Outlet } from "react-router-dom";

import ChatList from "../../components/ChatList/ChatList";
import Navigation from "../../components/Navigation/Navigation";

const Chat = () => {
	return (
		<section className="w-full h-[900px] p-1 md:p-5">
			<div className="w-full max-w-[1200px] mx-auto h-full bg-blackMagic rounded-2xl flex flex-col justify-start items-stretch p-2 md:p-5 gap-2">
				<div className="h-[10%] min-h-[80px] bg-darkGray col-span-2 rounded-xl">
					<Navigation />
				</div>
				<div className="w-full h-[calc(90%_-_8px)] max-h-[800px] flex justify-stretch items-stretch gap-2">
					<div className="hidden md:inline-block w-1/4 min-w-[300px] bg-darkGray rounded-xl">
						<ChatList />
					</div>
					<div className="w-full md:w-3/4 bg-darkGray rounded-xl">
						<Outlet />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Chat;
