import './App.css';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo } from './types';
import { TodoList } from './TodoList';

const mockTodos: Todo[] = [
	{ id: 1, title: "Build Portfolio", completed: false },
	{ id: 2, title: "Build Todo App demo", completed: false },
	{ id: 3, title: "Add to Portfolio", completed: false },
];

function App() {
	const [todos, setTodos] = useState<Todo[]>(mockTodos);

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
				<section className="flex gap-3">
					<Input placeholder="Add a new task..." className="flex-1" />
					<Button>Add</Button>
				</section>
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
