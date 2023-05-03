import { Route, Routes } from "react-router";

import Login from "./routes/Login/Login";
import Chat from "./routes/Chat/Chat";
import Home from "./routes/Home/Home";

import ChatBox from "./components/ChatBox/ChatBox";
import Subject from "./components/Subject/Subject";

import "./App.css";

function App() {
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
