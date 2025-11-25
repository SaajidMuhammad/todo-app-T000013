const TodoForm = ({ title, setTitle, description, setDescription, onSubmit, submitting }) => {
  return (
    <form onSubmit={onSubmit} className="todo-form">
      <div className="form-group">
        <label htmlFor="todo-title">Task Title</label>
        <input
          id="todo-title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          disabled={submitting}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="todo-description">
          Description <span className="optional">(optional)</span>
        </label>
        <textarea
          id="todo-description"
          placeholder="Add more details about this task..."
          value={description}
          onChange={event => setDescription(event.target.value)}
          disabled={submitting}
          rows={3}
        />
      </div>
      <button type="submit" disabled={submitting} className="submit-button">
        {submitting ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  )
}

export default TodoForm

