const TodoForm = ({ formValue, setFormValue, onSubmit, submitting }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={formValue}
        onChange={event => setFormValue(event.target.value)}
        disabled={submitting}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  )
}

export default TodoForm

