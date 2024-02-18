import { useRef, useState } from "react";
import SingleTodo from "./SingleTodo";

import "./Todo.css";

function Todo() {
  const data = useRef();

  const [todo, setTodo] = useState([]);

  const handleData = (e) => {
    e.preventDefault();
    const inputValue = data.current.value;
    setTodo([...todo, inputValue]);
    data.current.value = "";
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo.slice(0, index), ...todo.slice(index + 1)];
    setTodo(updatedTodo);
  };

  return (
    <>
      <div className="header">
        <h2>Todo App</h2>
      </div>

      <div className="todo-body">
        <div className="container">
          <h2>What you want to do today?</h2>
          <form onSubmit={handleData}>
            <input type="text" placeholder="eg Watch Movies" ref={data}></input>
          </form>
        </div>
      </div>

      {todo.map((element, index) => {
        return (
          <>
            <SingleTodo
              datas={element}
              key={index}
              onDelete={() => handleDelete(index)}
            />
          </>
        );
      })}
    </>
  );
}
export default Todo;
