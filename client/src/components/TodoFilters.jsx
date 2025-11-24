const TodoFilters = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      {['all', 'active', 'completed'].map(option => (
        <button
          key={option}
          className={filter === option ? 'active' : ''}
          onClick={() => setFilter(option)}
          type="button"
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default TodoFilters

