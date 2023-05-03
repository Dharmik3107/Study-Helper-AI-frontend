import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../components/Button/Button";
import Input from "./../../components/Input/Input";

import { popupSignin, onAuthStateChangedListener, createUserDocument } from "../../utils/firebase/firebase";
import { EmailLoginAPI } from "../../utils/BackendLinks";

import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

import { setUserCredentials } from "../../store/reducers/userSlice";

const Login = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const [isEmailSubmitted, setEmailSubmitted] = useState(false);
	const [generatedOTP, setGeneratedOTP] = useState("");
	const navigate = useNavigate();

	//Listening on user object change by firebase for google signin
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocument(user);
				dispatch(setUserCredentials({ email: user?.email, otp: "000000" }));
			}
		});

		return unsubscribe;
	}, []);

	//Login API Fetching using axios and storing up backend generated otp
	useEffect(() => {
		const fetchLoginAPI = async () => {
			try {
				const email = { email: user.email };
				const result = await axios.post(EmailLoginAPI, email);
				setGeneratedOTP(result.data.message.otp);
				setEmailSubmitted(true);
			} catch (error) {
				console.error(error.message);
			}
		};
		if (user.email !== "") {
			fetchLoginAPI();
		}
	}, [user.email]);

	//function to execute form submission for login and otp verification
	const handleLoginSubmit = (event) => {
		event.preventDefault();
		const { email, otp } = event.target;
		if (isEmailSubmitted) {
			dispatch(setUserCredentials({ ...user, otp: otp.value.toString() }));
			if (user.otp === generatedOTP) {
				navigate("/chat");
				dispatch(setUserCredentials({ ...user, otp: "" }));
			}
		} else {
			dispatch(setUserCredentials({ email: email.value, otp: "" }));
		}
	};

	//function to popup google signin window
	const handleGoogleLogin = async () => {
		await popupSignin();
		if (user.email) {
			navigate("/chat");
		}
	};

	//Storing user typed OTP
	const handleOTPInsert = (event) => {
		dispatch(setUserCredentials({ ...user, otp: event.target.value }));
	};

	//Function to redirect on email continue form
	const handleBackArrow = () => {
		setEmailSubmitted(false);
		dispatch(setUserCredentials({ email: "", otp: "" }));
	};
	return (
		<section className="w-[95%] h-full flex justify-center items-center mx-auto">
			{isEmailSubmitted && (
				<form onSubmit={handleLoginSubmit} className="relative w-full max-w-[400px] h-[400px] px-5 bg-blackMagic rounded-xl flex flex-col justify-center items-center">
					<LeftArrow className="absolute top-2 left-2 w-8 h-8 fill-ghostWhite" onClick={handleBackArrow} />
					<Input type="number" name="otp" id="otp" label="Enter OTP" placeholder="Enter your one-time-password" onChange={handleOTPInsert} />
					<div className="w-full h-3"></div>
					<Button type="submit" buttonText="Sign in" />
				</form>
			)}
			{!isEmailSubmitted && (
				<form onSubmit={handleLoginSubmit} className="relative w-full max-w-[400px] h-[400px] px-5 bg-blackMagic rounded-xl flex flex-col justify-center items-center">
					<h1 className="absolute top-5 w-full text-center text-indigo text-4xl font-openSans font-bold">LOGIN</h1>
					<Input type="email" name="email" id="email" label="Enter your email" placeholder="Enter your email" />
					<div className="w-full h-5"></div>
					<Button type="submit" buttonText="Continue" />
					<h1 className="my-2">OR</h1>
					<Link to="" className="w-full flex justify-center" onClick={handleGoogleLogin}>
						<Button type="button" buttonText="Google Sign in" buttonType="google" />
					</Link>
				</form>
			)}
			<Link to="/" className="text-blackMagic absolute top-5 left-5 text-xl font-bold w-20 h-20 bg-ghostWhite rounded-[50%] flex justify-center items-center shadow-xl">
				Home
			</Link>
		</section>
	);
};

export default Login;
