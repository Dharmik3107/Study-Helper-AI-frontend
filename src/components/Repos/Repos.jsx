import React from "react";
import { Link } from "react-router-dom";

const Repos = () => {
	return (
		<div className="w-full h-[300px] flex flex-col justify-center items-center">
			<h1 className="text-blackMagic text-4xl font-bold z-[2] mb-5">Github Repos</h1>
			<div className="w-fit h-fit flex justify-center items-center">
				<div className="w-1/2 h-fit flex flex-col justify-center items-center gap-4 z-[2] duration-500 transition-all hover:underline underline-offset-4">
					<Link to="https://github.com/Dharmik3107/Study-Helper-AI-frontend" className="text-blackMagic text-xl">
						Frontend
					</Link>
				</div>
				<div className="w-[1px] h-full bg-blackMagic z-[2] mx-5"></div>
				<div className="w-1/2 h-fit flex flex-col justify-center items-center gap-4 z-[2] duration-500 transition-all hover:underline underline-offset-4">
					<Link to="https://github.com/Dharmik3107/Study-Helper-AI-Backend" className="text-blackMagic text-xl">
						Backend
					</Link>
				</div>
			</div>
			<div className="w-fit h-fit flex flex-col justify-center items-center z-[2] mt-5">
				<h1 className="text-blackMagic ">
					Made by{" "}
					<Link to="http://abhangidharmik.com/" className="hover:underline underline-offset-4">
						Dharmik Abhangi
					</Link>{" "}
				</h1>
			</div>
		</div>
	);
};

export default Repos;
