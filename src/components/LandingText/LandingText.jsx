import React from "react";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

const LandingText = () => {
	return (
		<div className="w-full h-[700px] flex justify-center items-center">
			<div className="w-fit min-w-[300px] flex flex-col justify-center items-center">
				<h1 className="text-blackMagic xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold z-[2]">Study Helper AI</h1>
				<h1 className="text-blackMagic xs:text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold mt-2 mb-10 z-[2]">ChatGPT Powered Doubt Solver</h1>
				<Link to="/login" className="w-full text-center">
					<Button buttonText="Try it now" buttonType="inverted" />
				</Link>
			</div>
		</div>
	);
};

export default LandingText;
