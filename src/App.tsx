import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function App() {
	return (
		<main className="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-50 text-gray-900">
			<div className="w-full max-w-4xl bg-white shadow p-8 space-y-8">
				<header>
					<h1 className="text-4xl font-bold mb-2">React Todo App</h1>
					<p className="text-gray-600 text-lg">
						This is a demo todo app using Vite, React, TypeScript, Tailwind CSS, and ShadCN UI.
					</p>
				</header>
				<section className="flex gap-3">
					<Input placeholder="Add a new task..." className="flex-1" />
					<Button>Add</Button>
				</section>
				<section className="space-y-2">
					<div className="flex items-center gap-2">
						<input type="checkbox" />
						<span>Learn React</span>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" />
						<span>Build Todo App</span>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" />
						<span>Profit 💰</span>
					</div>
				</section>
			</div>
		</main>
	)
}

export default App
