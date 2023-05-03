import React from "react";

const Response = ({ response }) => {
	return (
		<div className="w-full h-fit my-2 flex justify-start items-center">
			<div className="w-[80%] md:w-fit md:max-w-[300px] lg:max-w-[400px] bg-periwinkle p-3 rounded-lg">{response.replace(/(Answer:)|(")/g, "").trim()}</div>
		</div>
	);
};

export default Response;
