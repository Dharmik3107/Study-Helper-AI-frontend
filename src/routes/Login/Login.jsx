import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import Input from "./../../components/Input/Input";

import { popupSignin, onAuthStateChangedListener, createUserDocument } from "../../utils/firebase/firebase";

const initialFormValues = {
	email: "",
};

const Login = () => {
	const [user, setUser] = useState(initialFormValues);
	const [isEmailSubmitted, setEmailSubmitted] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocument(user);
				setUser({ email: user?.email });
			}
		});

		return unsubscribe;
	}, []);

	const handleLoginSubmit = (event) => {
		console.log("called form");
		event.preventDefault();
		if (user.email) {
		} else {
			setEmail({ email: event.target.email.value });
		}
	};

	const handleGoogleLogin = async () => {
		await popupSignin();
		navigate("/");
	};

	return (
		<section className="w-[95%] h-full flex justify-center items-center mx-auto">
			{isEmailSubmitted && (
				<form onSubmit={handleLoginSubmit} className="relative w-full max-w-[400px] h-[400px] px-5 bg-blackMagic rounded-xl flex flex-col justify-center items-center">
					<Input type="number" name="otp" id="otp" label="Enter OTP" placeholder="Enter your one-time-password" />
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
					<Link to={user.email ? "/" : ""} className="w-full flex justify-center" onClick={handleGoogleLogin}>
						<Button type="button" buttonText="Google Sign in" buttonType="google" />
					</Link>
				</form>
			)}
		</section>
	);
};

export default Login;
