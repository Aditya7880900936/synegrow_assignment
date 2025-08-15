import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import taskRoutes from './routes/task.routes';
import { notFoundHandler, errorHandler } from './middlewares/error.middleware';
import { swaggerServe, swaggerSetup } from './utils/swagger';

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/tasks', taskRoutes);
app.use('/api-docs', swaggerServe, swaggerSetup);
// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;