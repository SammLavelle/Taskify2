import { useAddTaskForm } from "../../../hooks/addTaskForm/useAddTaskForm";
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
				<button type="submit" disabled={addTaskForm.isLoading}>
					Add Task
				</button>
			</form>
		</>
	);
};

export default AddTaskForm;
