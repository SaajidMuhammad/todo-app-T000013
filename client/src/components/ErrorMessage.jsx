const ErrorMessage = ({ error }) => {
  if (!error) return null
  return <div className="error-pane">{error}</div>
}

export default ErrorMessage

