import type React from "react";

interface CustomButtonProps {
	color?: string;
	label?: string;
	fontSize?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	id?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	color = "blue",
	label = "Click Me",
	fontSize = "16px",
	onClick,
	className = "",
	id = "",
}) => {
	const defaultStyle: React.CSSProperties = {
		backgroundColor: color,
		color: "#fff",
		padding: "5px 20px",
		border: "none",
		borderRadius: "5px",
		fontSize: fontSize,
		cursor: "pointer",
	};

	return (
		<button
			id={id}
			type="button"
			className={className}
			style={defaultStyle}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default CustomButton;
