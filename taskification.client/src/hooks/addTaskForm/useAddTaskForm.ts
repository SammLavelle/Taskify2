import { useMutation } from "@tanstack/react-query";
import { useState, useRef } from "react";
import postNewTask from "../../api/postNewTask";

export const useAddTaskForm = () => {
	const [errors, setErrors] = useState<string>("");
	const formRef = useRef<HTMLFormElement | null>(null);

	const addTaskMutation = useMutation({
		mutationFn: (name: string) => postNewTask(name),
		onError: (error) => {
			setErrors(error.message);
		},
		onSuccess: () => {
			setErrors("");
			formRef.current?.reset();
		},
	});

	const handleSubmitAddTaskForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const name = formData.get("name");

		if (typeof name !== "string" || name.trim() == "") {
			setErrors("Lol what");
			return;
		}

		setErrors("");

		addTaskMutation.mutate(name);
	};

	return {
		errors,
		formRef,
		handleSubmitAddTaskForm,
		isLoading: addTaskMutation.isPending,
	};
};
