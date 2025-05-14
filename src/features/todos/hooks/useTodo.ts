// features/todos/hooks/useTodo.ts
import { useEffect, useState } from 'react';
import { Todo } from '@/features/todos/types';

const STORAGE_KEY = 'todos';

function loadTodos(): Todo[] {
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : [];
}

function saveTodos(todos: Todo[]) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function useTodo() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [nextId, setNextId] = useState<number>(1);

	useEffect(() => {
		const loaded = loadTodos();
		setTodos(loaded);
		const maxId = loaded.reduce((max, t) => Math.max(max, t.id), 0);
		setNextId(maxId + 1);
	}, []);

	const addTodo = (title: string) => {
		const newTodo: Todo = {
			id: nextId,
			title,
			completed: false,
		};
		const updated = [...todos, newTodo];
		setTodos(updated);
		saveTodos(updated);
		setNextId((prev) => prev + 1);
	};

	const toggleTodo = (id: number) => {
		const updated = todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updated);
		saveTodos(updated);
	};

	const deleteTodo = (id: number) => {
		const updated = todos.filter((todo) => todo.id !== id);
		setTodos(updated);
		saveTodos(updated);
	};

	const completedTodos = todos.filter((todo) => todo.completed);
	const openTodos = todos.filter((todo) => !todo.completed);

	return {
		todos,
		addTodo,
		toggleTodo,
		deleteTodo,
		completedTodos,
		openTodos,
	};
}
