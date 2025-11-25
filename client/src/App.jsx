import { useEffect, useMemo, useState } from 'react'
import './App.css'
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoFilters from './components/TodoFilters'
import ErrorMessage from './components/ErrorMessage'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

const App = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')

  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL}/todos`)
      const data = await response.json()
      setTodos(data)
      setError('')
    } catch {
      setError('Unable to load todos right now.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (!title.trim()) {
      setError('Please add a title before submitting.')
      return
    }
    try {
      setSubmitting(true)
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: title.trim(),
          description: description.trim()
        })
      })
      if (!response.ok) {
        throw new Error('Failed to create todo')
      }
      const created = await response.json()
      setTodos(current => [created, ...current])
      setTitle('')
      setDescription('')
      setError('')
    } catch {
      setError('Unable to create todo.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggle = async todo => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${todo.id}/done`, {
        method: 'PATCH'
      })
      if (!response.ok) {
        throw new Error('Failed to update todo')
      }
      const updated = await response.json()
      setTodos(current => current.map(item => (item.id === updated.id ? updated : item)))
    } catch {
      setError('Unable to update todo.')
    }
  }

  const handleDelete = async id => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, { method: 'DELETE' })
      if (!response.ok && response.status !== 204) {
        throw new Error('Failed to delete todo')
      }
      setTodos(current => current.filter(todo => todo.id !== id))
    } catch {
      setError('Unable to delete todo.')
    }
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.done)
    }
    if (filter === 'active') {
      return todos.filter(todo => !todo.done)
    }
    return todos
  }, [filter, todos])

  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(todo => todo.done).length
    return {
      total,
      completed,
      remaining: total - completed
    }
  }, [todos])

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className="app-shell">
      <main className="todo-card">
        <TodoHeader />
        <section className="controls">
          <TodoForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
          <TodoFilters filter={filter} setFilter={setFilter} />
        </section>
        <ErrorMessage error={error} />
        <section className="list-section">
          <TodoList
            loading={loading}
            filteredTodos={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
        <TodoStats stats={stats} />
      </main>
    </div>
  )
}

export default App
