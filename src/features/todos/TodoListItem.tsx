import { Checkbox } from '@/components/ui/checkbox';
import { Todo } from '../../types';

type Props = {
	todo: Todo,
	onToggleTodo: (id: number) => void,
	onDeleteTodo: (id: number) => void,
}

export function TodoListItem({ todo, onToggleTodo, onDeleteTodo }: Props) {
	return (
		<div className="flex items-center gap-2">
			<Checkbox
				id={`todo-${todo.id}`}
				checked={todo.completed}
				onCheckedChange={() => onToggleTodo(todo.id)}
			/>
			<label className={todo.completed ? 'line-through' : ''} htmlFor={`todo-${todo.id}`}>
				{todo.title}
			</label>
			<button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
		</div>
	);
}