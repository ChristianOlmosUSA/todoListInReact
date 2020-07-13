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
	return (
		<div className="text-center mt-5">
			{todos.map(t => (
				<li key={t.title}>{t.title}</li>
			))}
		</div>
	);
}
