import { Todo } from './types';
import { TodoListItem } from './TodoListItem';

type Props = {
	todos: Todo[],
	onToggleTodo: (id: number) => void,
	onDeleteTodo: (id: number) => void,
}

export function TodoList({ todos, onToggleTodo, onDeleteTodo }: Props) {
	return (
		<section className="space-y-2">
			{todos.length === 0 ? (
				<p className="text-gray-500">No tasks yet. Add one above!</p>
			) : (
				todos.map(todo => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						onToggleTodo={onToggleTodo}
						onDeleteTodo={onDeleteTodo}
					/>
				))
			)}
		</section>
	);
}