import React from "react";

//include images into your bundle

const initialTodos = [
	{ title: "Make the Bed" },
	{ title: "Read Homework" },
	{ title: "Walk the dog" }
];

// cannot have async or await inside an onClick with this boilerplate hence .then
// ***modern way -->   const response = await fetch("https://api.breatheco.de/student/219/task/");
// if (response.status === 200) {
//	const body = await response.json();
//	return body.data; // or these two lines could have just been await saveTodos(response.json.body.data)
//instead we are using .then below

//first component
export function Home() {
	const [todos, saveTodos] = React.useState(initialTodos);
	// state for controlled input :
	const [currentTitle, saveCurrentTitle] = React.useState("");

	return (
		<div className="text-center mt-5">
			<button
				onClick={() => {
					fetch("https://api.breatheco.de/student/219/task/")
						.then(response => response.json())
						.then(body => saveTodos(body.data));
				}}>
				Load Todos
			</button>

			{todos.map(t => (
				<li key={t.title}>{t.title}</li> // map list of todos to a list of li's
			))}
			<input
				type="text"
				onChange={e => saveCurrentTitle(e.target.value)}
				value={currentTitle} // this is a controlled input (part a), resetting input box back to blank
			/>
			<button
				onClick={() => {
					saveTodos(todos.concat({ title: currentTitle }));
					saveCurrentTitle(""); // this is a controlled input (part b, refreshing), without part a and b, the box retains the prior input and isnt user friendly
				}}>
				add new todo
			</button>
		</div>
	);
}
