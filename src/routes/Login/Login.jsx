import Button from "../../components/Button/Button";
import Input from "./../../components/Input/Input";

const Login = () => {
	const handleLoginSubmit = () => {};
	return (
		<section className="w-[95%] h-full flex justify-center items-center mx-auto">
			<form action="#" onSubmit={handleLoginSubmit} className="relative w-full max-w-[400px] h-[400px] px-5 bg-blackMagic rounded-xl flex flex-col justify-center items-center">
				<h1 className="absolute top-5 w-full text-center text-indigo text-4xl font-openSans font-bold">LOGIN</h1>
				<Input type="email" name="email" id="email" label="Enter your email" Placeholder="Enter your email" />
				<div className="w-full h-5"></div>
				<Button buttonText="Continue" />
				<h1 className="my-2">OR</h1>
				<Button buttonText="Google Sign in" buttonType="google" />
				{/* <Input type="number" name="otp" id="otp" label="Enter OTP" placeholder="Enter your one-time-password" />
				<div className="w-full h-3"></div>
				<Button type="submit" buttonText="Sign in" /> */}
			</form>
		</section>
	);
};

export default Login;
