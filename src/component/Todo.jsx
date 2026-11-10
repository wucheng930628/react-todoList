import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./Editform";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, updateTodo }) {
  return todo.isEditing ? (
    <EditForm
      todo={todo}
      updateTodo={updateTodo}
      cancelEdit={() => toggleIsEditing(todo.id)}
    />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p onClick={() => toggleCompleted(todo.id)}>{todo.content}</p>
      <div>
        <MdEdit onClick={() => toggleIsEditing(todo.id)} style={{ cursor: "pointer" }} />
        <MdDelete
          onClick={() => deleteTodo(todo.id)}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Todo;
