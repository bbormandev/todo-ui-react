import { render, screen, fireEvent } from "@testing-library/react";
import { AddTodoForm } from "../components/AddTodoForm";

describe("AddTodoForm", () => {
	it("renders the form with an input and button", () => {
		render(<AddTodoForm onAddTodo={() => { }} />);
		const input = screen.getByPlaceholderText(/add a new task/i);
		const button = screen.getByRole("button", { name: /add/i });

		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	it("calls onAdd when input is submitted", () => {
		const mockAdd = vi.fn();
		render(<AddTodoForm onAddTodo={mockAdd} />);

		const input = screen.getByPlaceholderText(/add a new task/i);
		const button = screen.getByRole("button", { name: /add/i });

		fireEvent.change(input, { target: { value: "Test task" } });
		fireEvent.click(button);

		expect(mockAdd).toHaveBeenCalledWith("Test task");
	});

	it("does not call onAdd when input is empty", () => {
		const mockAdd = vi.fn();
		render(<AddTodoForm onAddTodo={mockAdd} />);

		const button = screen.getByRole("button", { name: /add/i });

		fireEvent.click(button);

		expect(mockAdd).not.toHaveBeenCalled();
	});
});
