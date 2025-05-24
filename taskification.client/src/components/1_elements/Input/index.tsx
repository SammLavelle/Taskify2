import "./style.css";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = ({ ...props }: InputProps) => {
	return <input {...props} />;
};

export default Input;
