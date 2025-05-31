import classnames from "classnames";
import { ComponentProps } from "react";

export enum ButtonVariant {
	Primary,
	Success,
	Danger,
}
export enum ButtonStyle {
	Solid,
	Outline,
}

type ButtonProps = ComponentProps<"button"> & {
	children: React.ReactNode;
	className?: string;
	variant?: ButtonVariant;
	style?: ButtonStyle;
};

const baseStyle = "font-medium rounded-4xl py-2 px-4 border transition";
const disabledStyle =
	"disabled:border-grey-light disabled:bg-grey-light disabled:text-grey";

function generateVariantStyles(color: string) {
	return {
		[ButtonStyle.Solid]: `bg-${color} border-${color} text-white hover:bg-${color}-dark hover:border-${color}-dark`,
		[ButtonStyle.Outline]: `bg-${color}-light text-${color}-dark border-${color}-dark hover:bg-${color}-dark hover:border-${color.dark} hover:text-white`,
	};
}

const stylesMap: Record<ButtonVariant, Record<ButtonStyle, string>> = {
	[ButtonVariant.Primary]: {
		[ButtonStyle.Solid]:
			"bg-black border-black text-white hover:bg-grey-dark hover:border-grey-dark",
		[ButtonStyle.Outline]:
			"bg-white text-black border-black hover:bg-grey-dark hover:border-grey-dark hover:text-white",
	},
	[ButtonVariant.Danger]: generateVariantStyles("red"),
	[ButtonVariant.Success]: generateVariantStyles("green"),
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
