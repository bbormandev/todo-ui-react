import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
	onAddTodo: (title: string) => void;
}

export function AddTodoForm({ onAddTodo }: Props) {
	const [title, setTitle] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (title.trim() === "") { return; }
		onAddTodo(title);
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-3">
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Add a new task..."
				className="flex-1"
			/>
			<Button type="submit">Add</Button>
		</form>
	);
}