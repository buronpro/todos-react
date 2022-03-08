import React from 'react';

function Todo({ children, id, handleDelete }) {
	return (
		<li>
			<span>{children}</span>
			<button data-todo-id={id} onClick={handleDelete}>
				delete
			</button>
		</li>
	);
}

export default Todo;
