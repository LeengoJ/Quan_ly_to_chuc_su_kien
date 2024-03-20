import { Model } from 'mongoose';
import { TaskDocument } from './task.schema';
import { UserService } from 'src/user/user.service';
export declare class TaskService {
    private readonly taskModel;
    private Userservice;
    constructor(taskModel: Model<TaskDocument>, Userservice: UserService);
    _getDetailTask(task: TaskDocument): {
        name: Promise<import("../user/user-details.interface").UserDetails | null>;
        task: string;
    };
    getTaskById(id: string): Promise<TaskDocument | null>;
    getAll(): Promise<TaskDocument[]>;
    deleteTask(id: string, updatedTaskData: Partial<TaskDocument>): Promise<boolean>;
    create(id: string, task: string): Promise<TaskDocument>;
}
