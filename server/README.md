# Todo API Server

Express API server for managing todos with MongoDB.

## Features

- RESTful API endpoints for todo management
- MongoDB database integration with Mongoose
- CORS enabled for cross-origin requests
- Health check endpoint

## Prerequisites

- Node.js
- MongoDB database

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the server root directory:

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:4000` by default.

## API Endpoints

### Health Check
- `GET /health` - Returns server status

### Todos
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `PATCH /api/todos/:id/done` - Toggle todo completion status
- `DELETE /api/todos/:id` - Delete a todo



