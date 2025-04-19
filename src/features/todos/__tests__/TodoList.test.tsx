import { render, screen } from "@testing-library/react";
import { TodoList } from "../TodoList";
import { Todo } from '../../../types';

describe("TodoList", () => {
	it("displays CTA when list is empty", () => {
		const mockToggle = vi.fn();
		const mockDelete = vi.fn();
		const mockTodos: Todo[] = [];
		render(<TodoList todos={mockTodos} onToggleTodo={mockToggle} onDeleteTodo={mockDelete} />)

		const emptyMessage = screen.getByText(/no tasks yet\. add one above!/i);
		expect(emptyMessage).toBeInTheDocument();
	});

	it("displays item when in list", () => {
		const mockToggle = vi.fn();
		const mockDelete = vi.fn();
		const mockTodos: Todo[] = [
			{ id: 1, title: "Build Portfolio", completed: false },
		];
		render(<TodoList todos={mockTodos} onToggleTodo={mockToggle} onDeleteTodo={mockDelete} />)

		const todoItem = screen.getByText(/build portfolio/i);
		expect(todoItem).toBeInTheDocument();
	});
})
