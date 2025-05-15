import { AddTodoForm, TodoList } from '@/features/todos';
import { useTodo } from '@/features/todos/hooks';
import { LaunchModal } from '@/components/LaunchModal';

function TodoPage() {
	const { addTodo, toggleTodo, deleteTodo, openTodos, completedTodos } = useTodo();

	return (
		<main className="min-h-screen flex flex-col items-center sm:px-4 sm:py-12 bg-gray-50 text-gray-900">
			<LaunchModal />
			<div className="w-full min-h-[100dvh] sm:min-h-fit max-w-4xl bg-white shadow p-8 space-y-8">
				<header>
					<h1 className="text-4xl font-bold mb-2">BDone</h1>
					<p className="text-gray-600 text-lg">
						A super-simple todo app. Everything you add is stored locally in your browser—no account, no cloud. Stay tuned for upcoming sync & collaboration features!
					</p>
				</header>
				<AddTodoForm
					onAddTodo={(title) => {
						addTodo(title);
					}}
				/>
				<TodoList
					todos={openTodos}
					onToggleTodo={toggleTodo}
					onDeleteTodo={deleteTodo}
				/>
				<TodoList
					todos={completedTodos}
					onToggleTodo={toggleTodo}
					onDeleteTodo={deleteTodo}
				/>
			</div>
		</main>
	)
}

export default TodoPage;
