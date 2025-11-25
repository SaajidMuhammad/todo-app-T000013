const TodoStats = ({ stats }) => {
  return (
    <footer>
      <div>
        <strong>{stats.total}</strong> total
      </div>
      <div>
        <strong>{stats.completed}</strong> done
      </div>
      <div>
        <strong>{stats.remaining}</strong> left
      </div>
    </footer>
  )
}

export default TodoStats

