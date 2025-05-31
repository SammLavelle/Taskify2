import { useAddTaskForm } from "../../../hooks/addTaskForm/useAddTaskForm";
import Button from "../../1_elements/Button";
import Input from "../../1_elements/Input";

const AddTaskForm = () => {
	const addTaskForm = useAddTaskForm();

	return (
		<>
			<h2>Add Task</h2>
			<form
				ref={addTaskForm.formRef}
				onSubmit={addTaskForm.handleSubmitAddTaskForm}
			>
				{addTaskForm.errors && <p>{addTaskForm.errors}</p>}
				<Input name="name" placeholder="Add a task" />
				<Button type="submit" disabled={addTaskForm.isLoading}>
					Add Task
				</Button>
			</form>
		</>
	);
};

export default AddTaskForm;
