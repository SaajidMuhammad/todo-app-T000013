const TodoForm = ({
  title,
  setTitle,
  description,
  setDescription,
  onSubmit,
  submitting,
  editingTodo,
  onCancelEdit
}) => {
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
      <div className="form-actions">
        {editingTodo && (
          <button type="button" className="cancel-button" onClick={onCancelEdit} disabled={submitting}>
            Cancel
          </button>
        )}
        <button type="submit" disabled={submitting} className="submit-button">
          {submitting ? (editingTodo ? 'Saving...' : 'Adding...') : editingTodo ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  )
}

export default TodoForm

