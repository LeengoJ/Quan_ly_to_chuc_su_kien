import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDocument } from './task.schema';
import { UserDocument } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<TaskDocument>,
        private Userservice: UserService
    ) { }

    _getDetailTask(task: TaskDocument) {
        const id = task.id;
        return {
            name: this.Userservice.findById(id),
            task: task.task
        }
    }
    getTaskById(id: string): Promise<TaskDocument | null> {
        return this.taskModel.findById(id)
    }
    getAll(): Promise<TaskDocument[]> {
        return this.taskModel.find().exec();
    }
    async deleteTask(id: string, updatedTaskData: Partial<TaskDocument>) {
        const taskUpdate = await this.taskModel.findByIdAndUpdate(id, updatedTaskData, { new: true })
        if (!taskUpdate) {
            throw new NotFoundException(`Can't find task with ID ${id}`);
        }
        return true;
    }
    async create(
        id: string,
        task: string
    ): Promise<TaskDocument> {
        const newTask = new this.taskModel({
            id,
            task
        });
        return newTask.save();
    }

}
