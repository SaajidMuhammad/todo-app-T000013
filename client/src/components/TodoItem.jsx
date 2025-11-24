const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
      </label>
      <button type="button" onClick={() => onDelete(todo.id)}>
        Remove
      </button>
    </li>
  )
}

export default TodoItem

