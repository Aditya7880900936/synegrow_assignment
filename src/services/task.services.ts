import { ITask, TaskStatus } from '../interfaces/task.interface';
import Task from '../models/task.model';

export const createTask = async (taskData: Omit<ITask, 'createdAt' | 'updatedAt'>): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

export const getTasks = async (
  page: number = 1,
  limit: number = 10,
  status?: TaskStatus,
  search?: string,
): Promise<{ tasks: ITask[]; count: number }> => {
  const skip = (page - 1) * limit;
  
  const query: any = {};
  if (status) query.status = status;
  if (search) query.title = { $regex: search, $options: 'i' };

  const tasks = await Task.find(query).skip(skip).limit(limit);
  const count = await Task.countDocuments(query);

  return { tasks, count };
};

export const getTaskById = async (id: string): Promise<ITask | null> => {
  return await Task.findById(id);
};

export const updateTask = async (id: string, taskData: Partial<ITask>): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

export const deleteTask = async (id: string): Promise<ITask | null> => {
  return await Task.findByIdAndDelete(id);
};