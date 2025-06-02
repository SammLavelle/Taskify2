import classnames from "classnames";
import { ComponentProps } from "react";

export enum ButtonVariant {
	Primary = "primary",
	Success = "success",
	Danger = "danger",
}

export enum ButtonStyle {
	Solid = "solid",
	Outline = "outline",
}

type ButtonProps = ComponentProps<"button"> & {
	children: React.ReactNode;
	className?: string;
	variant?: ButtonVariant;
	style?: ButtonStyle;
};

const baseStyle = "font-medium rounded-4xl py-2 px-4 border transition";
const disabledStyle =
	"disabled:border-grey-100 disabled:bg-grey-100 disabled:text-grey-400";

const stylesMap = {
	[ButtonVariant.Primary]: {
		[ButtonStyle.Solid]:
			"bg-black border-black text-white hover:bg-grey-700 hover:border-grey-700",
		[ButtonStyle.Outline]:
			"bg-white text-black border-black hover:bg-grey-700 hover:border-grey-700 hover:text-white",
	},
	[ButtonVariant.Danger]: {
		[ButtonStyle.Solid]: `bg-red-500 border-red-500 text-white hover:bg-red-700 hover:border-red-700`,
		[ButtonStyle.Outline]: `bg-red-100 text-red-700 border-red-700 hover:bg-red-700 hover:border-red-700 hover:text-white`,
	},
	[ButtonVariant.Success]: {
		[ButtonStyle.Solid]: `bg-green-500 border-green-500 text-white hover:bg-green-700 hover:border-green-700`,
		[ButtonStyle.Outline]: `bg-green-100 text-green-700 border-green-700 hover:bg-green-700 hover:border-green-700 hover:text-white`,
	},
};
const Button = ({
	className,
	children,
	style = ButtonStyle.Solid,
	variant = ButtonVariant.Primary,
	...props
}: ButtonProps) => {
	const buttonStyle = stylesMap[variant][style];
	return (
		<button
			className={classnames(
				baseStyle,
				buttonStyle,
				disabledStyle,
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
