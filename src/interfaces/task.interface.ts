// task.interface.ts
import { Document } from "mongoose";

export enum TaskStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
}

// Mongoose document type (DB object)
export interface ITask extends Document {
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Input type (for creating new tasks)
export type TaskInput = {
  title: string;
  description: string;
  status?: TaskStatus; // optional on creation
};
