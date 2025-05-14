import { BrowserRouter, Routes, Route } from "react-router";
import TodoPage from "./pages/TodoPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;