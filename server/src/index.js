require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/todos', todosRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
});

const startServer = async () => {
  try {
    await connectDatabase(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

