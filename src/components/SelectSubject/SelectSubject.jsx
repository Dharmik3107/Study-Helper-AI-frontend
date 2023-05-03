import React, { useState } from "react";

const SUBJECTS = ["Physics", "Chemisty", "Mathematics", "Science", "History"];

const YT_Links = {
	Physics: "https://www.youtube.com/embed/uJo16_eSdUY",
	Chemisty: "https://www.youtube.com/embed/2LbVOQYoRas",
	Mathematics: "https://www.youtube.com/embed/Qi_pIzrslN0",
	Science: "https://www.youtube.com/embed/h1hI_4NDI3Q",
	History: "https://www.youtube.com/embed/8z-dzYsTi7k",
};

const SelectSubject = () => {
	const [selectedSubject, setSelectedSubject] = useState("Physics");

	const handleSubjectSelect = (event) => {
		setSelectedSubject(event.target.value);
	};
	return (
		<div className="w-full h-fit flex flex-col justify-between items-center pb-10">
			<div className="w-full h-fit z-[2] flex flex-col justify-center items-center my-2">
				<h1 className="text-blackMagic text-4xl font-bold text-center mb-10">Select Subject</h1>
				<div className="w-full max-w-[1500px] flex justify-center items-center flex-wrap gap-2 my-2 mx-auto">
					{SUBJECTS.map((element, index) => {
						return (
							<button
								key={index}
								className="w-[calc(33%_+_20px)] md:w-full max-w-[250px] h-12 bg-indigo rounded-lg hoverExpand border-2 outline-none boder-indigo border-solid"
								value={element}
								onClick={handleSubjectSelect}
							>
								{element}
							</button>
						);
					})}
				</div>
			</div>
			<div className="w-full h-fit z-[2]">
				<div className="w-full max-w-[1500px] h-auto bg-ghostWhite z-[2] mx-auto rounded-2xl shadow-xl aspect-video overflow-hidden">
					<iframe
						src={`${YT_Links[selectedSubject]}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default SelectSubject;
