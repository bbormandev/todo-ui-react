import { render, screen, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../App";

describe("App", () => {
	let user: ReturnType<typeof userEvent.setup>;

	beforeEach(() => {
		user = userEvent.setup();
	});

	it("renders a page heading", () => {
		render(<App />);

		expect(
			screen.getByRole('heading', { level: 1, name: /react todo app/i })
		).toBeInTheDocument();
	});

	it('adds a todo', async () => {
		render(<App />);
		await addTodo('Test Todo');

		expect(screen.getByText('Test Todo')).toBeInTheDocument();
	});

	it('toggles a todo complete', async () => {
		render(<App />);
		await addTodo('Toggle Todo');

		const todo = screen.getByText('Toggle Todo');
		await user.click(todo);

		// Item was remounted in completed list, so we need to query again.
		const toggled = screen.getByText('Toggle Todo')
		expect(toggled).toHaveClass('line-through')
	});

	it('deletes a todo', async () => {
		render(<App />);
		await addTodo('Delete Me');

		const todo = screen.getByText('Delete Me');
		const todoContainer = todo.closest('div');
		const deleteButton = within(todoContainer!).getByRole('button', { name: /delete/i });
		await user.click(deleteButton);

		expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
	});

	async function addTodo(title: string) {
		const input = screen.getByPlaceholderText(/add a new task.../i);
		const button = screen.getByRole('button', { name: /add/i });
		await user.type(input, title);
		await user.click(button);
	}
});
