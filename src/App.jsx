import { Route, Routes } from "react-router";

import Login from "./routes/Login/Login";
import Chat from "./routes/Chat/Chat";

import "./App.css";

function App() {
	return (
		<main className="w-screen h-screen">
			<Routes>
				<Route path="/" element={<Chat />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</main>
	);
}

export default App;
