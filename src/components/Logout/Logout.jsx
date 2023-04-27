import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ReactComponent as LogoutICon } from "../../assets/Logout.svg";

import { setUserCredentials } from "../../store/reducers/userSlice";

const Logout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(setUserCredentials({ email: "", otp: "" }));
		navigate("/login");
	};
	return (
		<button className="w-[calc(100%_-_8px)] h-12 bg-blackMagic absolute bottom-1 left-1 rounded-lg outline-none border-none flex  justify-center items-center gap-2 text-lg" onClick={handleLogout}>
			<LogoutICon />
			Logout
		</button>
	);
};

export default Logout;
