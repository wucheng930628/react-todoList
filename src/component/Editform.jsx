import { useState } from "react";

function EditForm({ todo, updateTodo, cancelEdit }) {
  const [content, setContent] = useState(todo.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      updateTodo(todo.id, content.trim());
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">儲存</button>
      <button type="button" onClick={cancelEdit}>取消</button>
    </form>
  );
}

export default EditForm;
