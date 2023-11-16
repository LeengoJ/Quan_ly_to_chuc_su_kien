import { Body, Controller, Get, NotFoundException, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskDocument } from './task.schema';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Post('create')
    createTask(
        @Body('id') id: string,
        @Body('task') task: string
    ): Promise<TaskDocument | null> {
        const listTask = ['admin', 'user']
        if (!listTask.includes(task)) {
            throw new NotFoundException(`task valid`);
        }
        return this.taskService.create(id, task);
    }

    @Put('delete')
    async deleteTask(@Body('id') id: string) {
        const existingTask = await this.taskService.getTaskById(id);
        const updatedTaskData = {
            ...existingTask,
            status: false
        }
        return await this.taskService.deleteTask(id, updatedTaskData)
    }
    @Get('getbyid')
    getById(@Body('id') id: string): Promise<TaskDocument | null> {
        return this.taskService.getTaskById(id)
    }
    @Get()
    findAllProducts(): Promise<TaskDocument[]> {
        return this.taskService.getAll();
    }
}
