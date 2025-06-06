import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AddTaskForm from "./components/2_blocks/AddTaskForm";
import Button, {
	ButtonVariant,
	ButtonStyle,
} from "./components/1_elements/Button";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AddTaskForm />
			<Button variant={ButtonVariant.Danger} style={ButtonStyle.Solid}>
				Button
			</Button>
		</QueryClientProvider>
	);
};

export default App;
