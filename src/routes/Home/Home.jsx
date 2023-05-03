import React from "react";

import LandingText from "../../components/LandingText/LandingText";
import SelectSubject from "../../components/SelectSubject/SelectSubject";
import Features from "../../components/Features/Features";
import Repos from "../../components/Repos/Repos";

const Home = () => {
	return (
		<div className="w-full h-full bg-antiqueWhite">
			<ul className="background">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<LandingText />
			<Features />
			<SelectSubject />
			<Repos />
		</div>
	);
};

export default Home;
