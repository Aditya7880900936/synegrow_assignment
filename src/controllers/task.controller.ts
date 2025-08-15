import { Request, Response } from 'express';
import { TaskStatus } from '../interfaces/task.interface';
import * as taskService from '../services/task.services'
import { z } from 'zod';

const taskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  status: z.nativeEnum(TaskStatus).optional(),
});

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = taskSchema.parse(req.body);
    const task = await taskService.createTask(validatedData);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as TaskStatus | undefined;
    const search = req.query.search as string | undefined;

    const { tasks, count } = await taskService.getTasks(page, limit, status, search);
    
    res.json({
      tasks,
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = taskSchema.partial().parse(req.body);
    const task = await taskService.updateTask(req.params.id, validatedData);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};