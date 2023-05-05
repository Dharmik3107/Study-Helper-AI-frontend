import { Route, Routes, useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";

import Login from "./routes/Login/Login";
import Chat from "./routes/Chat/Chat";
import Home from "./routes/Home/Home";

import ChatBox from "./components/ChatBox/ChatBox";
import Subject from "./components/Subject/Subject";

import "./App.css";
import { useEffect } from "react";

function App() {
	const url = useLocation().pathname;
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	return (
		<main className="w-screen h-screen">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat" element={<Chat />}>
					<Route index element={<Subject />} />
					<Route path="/chat/:chatId" element={<ChatBox />} />
				</Route>
				<Route path="/login" element={<Login />} />
			</Routes>
		</main>
	);
}

export default App;
