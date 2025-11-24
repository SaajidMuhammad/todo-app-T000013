import TodoItem from './TodoItem'

const TodoList = ({ loading, filteredTodos, onToggle, onDelete }) => {
  if (loading) {
    return <p className="muted">Loading tasks...</p>
  }

  if (!filteredTodos.length) {
    return <p className="muted">Nothing here yet.</p>
  }

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList

