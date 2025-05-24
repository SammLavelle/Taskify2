import classNames from "classnames";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
	children: React.ReactNode;
	className?: string;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={classNames("button", className)} {...props}>
			{children}
		</button>
	);
};

export default Button;
