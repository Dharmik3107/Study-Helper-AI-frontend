const BUTTON_TYPES = {
	inverted: "inverted",
	google: "google",
};

const Button = ({ buttonText, buttonType = "" }) => {
	return <button className={`w-full max-w-[270px] h-12 bg-indigo rounded-md hoverExpand ${BUTTON_TYPES[buttonType]}`}>{buttonText}</button>;
};

export default Button;
