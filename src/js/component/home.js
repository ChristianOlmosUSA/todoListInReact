import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const initialTodos = [
	{ title: "Make the Bed" },
	{ title: "Read Homework" },
	{ title: "Walk the dog" }
];

//create your first component
export function Home() {
	const [todos, saveTodos] = React.useState(initialTodos);
	const [currentTitle, saveCurrentTitle] = React.useState("");
	// create adding item button's function:
	function createTodo(todoName) {
		saveTodos(todos.concat({ title: todoName }));
	}

	return (
		<div className="text-center mt-5">
			{todos.map(t => (
				<li key={t.title}>{t.title}</li>
			))}
			<input
				type="text"
				onChange={e => saveCurrentTitle(e.target.value)}
			/>
			<button onClick={() => createTodo(currentTitle)}>
				add new todo
			</button>
		</div>
	);
}
