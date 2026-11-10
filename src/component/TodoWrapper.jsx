import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: Math.random() },
    { content: "寫作業", id: Math.random() },
  ]);
const addTodo = (content) =>{
  setTodos([...todos, {content: content, id: Math.random()}])
}

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo}/>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoWrapper;
