const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <li>
      <div className="todo-info">
        <label>
          <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo)} />
          <div>
            <span className={todo.done ? 'completed' : ''}>{todo.title}</span>
            {todo.description ? <p className="todo-description">{todo.description}</p> : null}
          </div>
        </label>
      </div>
      <div className="todo-actions">
        <button type="button" onClick={() => onEdit(todo)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(todo.id)}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default TodoItem

