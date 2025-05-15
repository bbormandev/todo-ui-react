import { Todo } from '../types';
import { TodoListItem } from './TodoListItem';

type Props = {
	todos: Todo[],
	onToggleTodo: (id: number) => void,
	onDeleteTodo: (id: number) => void,
	showEmptyMesage: boolean,
}

export function TodoList({ todos, onToggleTodo, onDeleteTodo, showEmptyMesage }: Props) {
	return (
		<section className="space-y-2">
			{todos.length === 0 && showEmptyMesage ? (
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