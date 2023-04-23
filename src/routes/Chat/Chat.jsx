import React from "react";
import { Outlet } from "react-router-dom";

import ChatList from "../../components/ChatList/ChatList";
import Navigation from "../../components/Navigation/Navigation";

const Chat = () => {
	return (
		<section className="w-full h-full min-h-[700px] p-1 md:p-10">
			<div className="w-full max-w-[1200px] mx-auto h-full bg-blackMagic rounded-2xl grid grid-cols-1 md:grid-cols-[4fr_6fr] lg:grid-cols-[3fr_8fr] grid-rows-[1fr_8fr] p-5 gap-y-2 md:gap-2">
				<div className="bg-darkGray col-span-2 rounded-xl">
					<Navigation />
				</div>
				<div className="bg-darkGray rounded-xl">
					<ChatList />
				</div>
				<div className="bg-darkGray rounded-xl">
					<Outlet />
				</div>
			</div>
		</section>
	);
};

export default Chat;
