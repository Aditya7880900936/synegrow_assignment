import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Request, Response } from 'express';
import { TaskStatus } from '../interfaces/task.interface';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management API',
      version: '1.0.0',
      description: 'API for managing tasks',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the task',
            },
            title: {
              type: 'string',
              description: 'The title of the task',
            },
            description: {
              type: 'string',
              description: 'The description of the task',
            },
            status: {
              type: 'string',
              enum: Object.values(TaskStatus),
              description: 'The status of the task',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'The date and time when the task was created',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'The date and time when the task was last updated',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export const swaggerServe = swaggerUi.serve;
export const swaggerSetup = swaggerUi.setup(specs);