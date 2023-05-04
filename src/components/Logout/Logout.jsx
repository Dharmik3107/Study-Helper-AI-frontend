import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ReactComponent as LogoutICon } from "../../assets/Logout.svg";

import { setUserCredentials, initialState } from "../../store/reducers/userSlice";
import { signOutUser } from "../../utils/firebase/firebase";

const Logout = () => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = async () => {
		if (user.otp === "000000") {
			await signOutUser();
			dispatch(setUserCredentials(initialState));
			if (user.email === "") navigate("/login");
		} else {
			dispatch(setUserCredentials(initialState));
			navigate("/login");
		}
	};
	return (
		<button
			className="w-[calc(100%_-_8px)] h-12 bg-blackMagic absolute bottom-1 left-1 rounded-lg outline-none border-none flex  justify-center items-center gap-2 text-lg z-[3]"
			onClick={handleLogout}
		>
			<LogoutICon />
			Logout
		</button>
	);
};

export default Logout;
