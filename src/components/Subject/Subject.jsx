import React from "react";

import SubjectButton from "../SubjectButton/SubjectButton";

const SUBJECTS = ["physics", "chemistry", "mathematics", "history", "science"];

const Subject = () => {
	return (
		<div className="relative w-full h-full p-1 lg:p-5">
			<div className="relative w-full h-full flex flex-col justify-center items-center">
				<h1 className="mb-5 text-2xl">Select Subject</h1>
				<div className="w-full max-w-[400px] flex justify-start items-center flex-wrap gap-4">
					{SUBJECTS.map((element, index) => {
						return <SubjectButton key={index} value={element} text={element} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Subject;
