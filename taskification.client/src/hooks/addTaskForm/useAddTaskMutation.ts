import { useMutation } from "@tanstack/react-query";
import postNewTask from "../../api/postNewTask";

export const useAddTaskMutation = () => {
	return useMutation({
		mutationFn: (name: string) => postNewTask(name),
	});
};
