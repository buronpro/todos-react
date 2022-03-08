import React from 'react';
import './App.css';
import Todo from "./Components/Todo/Todo";

function App(){
  const [todos, setTodos] = React.useState([
    { id: 0, title: "Uy ishi Todos ", isCompleted: false },
    {
      id: 1,
      title: "uyga vazifa 2-3 uy ishlari",
      isCompleted: true,
    },
    { id: 2, title: "#Buronbek n21", isCompleted: true },
  ]);
  

  const handleDelete = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter((row) => row.id !== todoId);
    setTodos([...filteredTodos]);
  }

  return (

  <>
  <form className="form">
    <input
      className="input--text"
      onKeyUp={(evt) => {
        if (evt.code === "Enter" || evt.code === "Backspace") {
          const newTodo = {
            id: todos[todos.length - 1]?.id + 1 || 0,
            title: evt.target.value,
            isCompleted: false,
          };

          setTodos([...todos, newTodo]);
        }
      }}
      type="text"
      placeholder="todo..."
    />
    <ul>
      {todos.map((row) => (
        <Todo key={row.id} id={row.id} handleDelete={handleDelete}>
          {row.title}
          <input type="checkbox" className="checkbox" />
        </Todo>
      ))}
    </ul>
  </form>
</>
);
}

export default App;