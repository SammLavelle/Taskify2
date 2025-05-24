import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AddTaskForm from "./components/2_blocks/AddTaskForm";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AddTaskForm />
		</QueryClientProvider>
	);
};

export default App;
