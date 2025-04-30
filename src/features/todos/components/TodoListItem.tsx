import { Checkbox } from '@/components/ui/checkbox';
import { Button } from "@/components/ui/button";
import { Todo } from '../../../types';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

type Props = {
	todo: Todo,
	onToggleTodo: (id: number) => void,
	onDeleteTodo: (id: number) => void,
}

export function TodoListItem({ todo, onToggleTodo, onDeleteTodo }: Props) {
	return (
		<div className="group flex items-center gap-2">
			<Checkbox
				id={`todo-${todo.id}`}
				checked={todo.completed}
				onCheckedChange={() => onToggleTodo(todo.id)}
			/>
			<Label className={cn('cursor-pointer', todo.completed && 'line-through')} htmlFor={`todo-${todo.id}`}>
				{todo.title}
			</Label>
			<Button onClick={() => onDeleteTodo(todo.id)} variant="ghost" className="group-hover:opacity-100 opacity-0 transition-opacity">Delete</Button>
		</div>
	);
}