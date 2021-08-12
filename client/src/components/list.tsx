import React, { Fragment, useEffect, useState } from 'react';

import { EditTodo } from './editTodo';

interface Props {
	
}

interface Todo {
	todo_id: number,
	description: string
}

export const List: React.FC<Props> = () => {

	const [todos, setTodos] = useState<Todo[]>([]);

	const deleteTodo = async (id:number) => {
		try {
			await fetch(
				`/todos/${id}`,
				{
					method: "DELETE"
				}

			);
			
			setTodos(todos.filter(todo => todo.todo_id !== id));
		} catch (error) {
			console.error(error.message);
		}
	}

	const getTodos = async () => {
		try {
			const response = await fetch("/todos");
			const jsonData = await response.json();

			setTodos(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<Fragment>
			<div className="table">
				<div className="row bold border-bottom">
					<span>Description</span>
					<span className="text-center">Edit</span>
					<span className="text-center">Delete</span>
				</div>

				{ todos.map(todo => (
					<div className="row" key={ todo.todo_id }>
						<span>{ todo.description }</span>
						<span className="text-center">
							<EditTodo todo={ todo } />
						</span>
						<span className="text-center">
							<button className="btn btn-danger" onClick={ () => deleteTodo(todo.todo_id) }>Delete</button>
						</span>
					</div>
				))}
			</div>
		</Fragment>
	);
}
