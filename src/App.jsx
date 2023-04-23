import { Route, Routes } from "react-router";

import Login from "./routes/Login/Login";
import Chat from "./routes/Chat/Chat";
import ChatBox from "./components/ChatBox/ChatBox";

import "./App.css";

function App() {
	return (
		<main className="w-screen h-screen">
			<Routes>
				<Route path="/" element={<Chat />}>
					<Route index element={<ChatBox />} />
					{/* <Route path="/:id" element={<ChatBox />} /> */}
				</Route>
				<Route path="/login" element={<Login />} />
			</Routes>
		</main>
	);
}

export default App;
