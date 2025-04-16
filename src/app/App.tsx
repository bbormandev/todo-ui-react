import { useState } from 'react';
import { Todo } from '../types';
import { AddTodoForm, TodoList } from '../features/todos';

const mockTodos: Todo[] = [
	{ id: 1, title: "Build Portfolio", completed: false },
	{ id: 2, title: "Build Todo App demo", completed: false },
	{ id: 3, title: "Add to Portfolio", completed: false },
];

function App() {
	const [todos, setTodos] = useState<Todo[]>(mockTodos);
	const [nextId, setNextId] = useState<number>(mockTodos.length + 1);

	const addTodo = (title: string) => {
		const newTodo: Todo = {
			id: nextId,
			title,
			completed: false,
		};
		setTodos((prevTodos) => [...prevTodos, newTodo]);
		setNextId((prevId) => prevId + 1);
	};

	const toggleTodo = (id: number) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id));
	}

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
