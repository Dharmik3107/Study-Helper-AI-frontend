const Input = ({ label, name, ...allProps }) => {
	return (
		<div className="w-full max-w-[270px] h-[68px] flex flex-col justify-center items-start mb-5">
			<label htmlFor={name} className="w-full h-[20px]">
				{label}
			</label>
			<input name={name} {...allProps} className="w-full h-[48px] mt-1 rounded-md outline-none indent-3 placeholder:text-sm placeholder:opacity-75" />
		</div>
	);
};

export default Input;
