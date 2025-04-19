import { Todo } from '../../types';

type Props = {
	todo: Todo,
	onToggleTodo: (id: number) => void,
	onDeleteTodo: (id: number) => void,
}

export function TodoListItem({ todo, onToggleTodo, onDeleteTodo }: Props) {
	return (
		<div className="flex items-center gap-2">
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => onToggleTodo(todo.id)}
			/>
			<span className={todo.completed ? 'line-through' : ''}>
				{todo.title}
			</span>
			<button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
		</div>
	);
}