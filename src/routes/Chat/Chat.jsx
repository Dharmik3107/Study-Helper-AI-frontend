import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import ChatList from "../../components/ChatList/ChatList";
import Navigation from "../../components/Navigation/Navigation";
import Sidebar from "../../components/Sidebar/Sidebar";

const Chat = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const navigate = useNavigate();

	const user = useSelector((state) => state.user);

	useEffect(() => {
		if (user.email === "") {
			navigate("/login");
		}
	}, []);

	return (
		<>
			<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
				<div className="relative w-full max-w-[1200px] mx-auto h-full bg-blackMagic rounded-2xl flex flex-col justify-between items-stretch pt-[96px] md:pt-[108px] p-2 md:p-5 gap-2">
					<div className="absolute top-2 md:top-5 left-2 md:left-5 w-[calc(100%_-_16px)] md:w-[calc(100%_-_40px)] h-[80px] bg-darkGray col-span-2 rounded-xl">
						<Navigation setSidebarOpen={setSidebarOpen} />
					</div>
					<div className="w-full h-full flex justify-stretch items-start gap-2">
						<div className="relative hidden md:inline-block h-full w-1/4 min-w-[300px] bg-darkGray rounded-xl">
							<ChatList />
						</div>
						<div className="w-full md:w-3/4 h-full bg-darkGray rounded-xl">
							<Outlet />
						</div>
					</div>
				</div>
			</section>
			<Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
		</>
	);
};

export default Chat;
