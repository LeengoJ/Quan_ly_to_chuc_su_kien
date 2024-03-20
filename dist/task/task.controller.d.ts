import { TaskService } from './task.service';
import { TaskDocument } from './task.schema';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    createTask(id: string, task: string): Promise<TaskDocument | null>;
    deleteTask(id: string): Promise<boolean>;
    getById(id: string): Promise<TaskDocument | null>;
    findAllProducts(): Promise<TaskDocument[]>;
}
