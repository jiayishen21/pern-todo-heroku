import React, { Fragment } from 'react';
import { useState } from 'react';

interface Props {

}

export const InputTodo: React.FC<Props> = (props: Props) => {
	
	const [description, setDescription] = useState("");

	const onSubmitForm = async() => {
		try {
			const body = { description };
			await fetch(
				"/todos", 
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body)
				}
			);

			window.location.href = "/";


		} catch (error) {
			console.error(error.message);
		}
	}

	return (
		<Fragment>
			<div className="title">Todo List</div>
			<div className="add">
				<input
					className="add-input"
					type="text"
					value={ description }
					onChange={ e => setDescription(e.target.value) }
				/>
				<span className="add-button" onClick={ onSubmitForm }>Add</span>
			</div>
		</Fragment>
	);
}