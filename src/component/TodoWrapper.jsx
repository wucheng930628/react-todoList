import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

const STORAGE_KEY = "todos";

function TodoWrapper() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);

    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch {
        // 儲存資料格式錯誤時，改用預設資料。
      }
    }

    return [
      { content: "打掃廁所", id: Math.random(), isCompleted: false, isEditing: false },
      { content: "寫作業", id: Math.random(), isCompleted: false, isEditing: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (content) => {
    setTodos([...todos, {
      content,
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    )));
  };

  const toggleIsEditing = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id
        ? { ...todo, isEditing: !todo.isEditing }
        : todo
    )));
  };

  const updateTodo = (id, content) => {
    setTodos(todos.map((todo) => (
      todo.id === id
        ? { ...todo, content, isEditing: false }
        : todo
    )));
  };

  return (
    <div className="wrapper">
      <h1>我的待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          toggleCompleted={toggleCompleted}
          toggleIsEditing={toggleIsEditing}
          updateTodo={updateTodo}
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoWrapper;
