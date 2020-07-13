import React from "react";

//include images into your bundle

const initialTodos = [
	{ title: "Make the Bed" },
	{ title: "Read Homework" },
	{ title: "Walk the dog" }
];

//create your first component
export function Home() {
	const [todos, saveTodos] = React.useState(initialTodos);
	const [currentTitle, saveCurrentTitle] = React.useState("");
	//

	return (
		<div className="text-center mt-5">
			{todos.map(t => (
				<li key={t.title}>{t.title}</li>
			))}
			<input
				type="text"
				onChange={e => saveCurrentTitle(e.target.value)}
				value={currentTitle} // this is a controlled input (part a), resetting input box back to blank
			/>
			<button
				onClick={() => {
					saveTodos(todos.concat({ title: currentTitle }));
					saveCurrentTitle(""); // this is a controlled input (part b), without part a and b, the box retains the prior input and isnt user friendly
				}}>
				add new todo
			</button>
		</div>
	);
}
