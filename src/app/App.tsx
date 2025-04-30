import { AddTodoForm, TodoList } from '../features/todos';
import { useTodo } from '@/features/todos/hooks';

function App() {
	const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

	return (
		<main className="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-50 text-gray-900">
			<div className="w-full max-w-4xl bg-white shadow p-8 space-y-8">
				<header>
					<h1 className="text-4xl font-bold mb-2">React Todo App</h1>
					<p className="text-gray-600 text-lg">
						This is a demo todo app using Vite, React, TypeScript, Tailwind CSS, and ShadCN UI.
					</p>
				</header>
				<AddTodoForm
					onAddTodo={(title) => {
						addTodo(title);
					}}
				/>
				<TodoList
					todos={todos}
					onToggleTodo={(id) => {
						toggleTodo(id);
					}}
					onDeleteTodo={(id) => {
						deleteTodo(id);
					}}
				/>
			</div>
		</main>
	)
}

export default App
