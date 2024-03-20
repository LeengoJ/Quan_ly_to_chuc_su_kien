"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_service_1 = require("../user/user.service");
let TaskService = class TaskService {
    constructor(taskModel, Userservice) {
        this.taskModel = taskModel;
        this.Userservice = Userservice;
    }
    _getDetailTask(task) {
        const id = task.id;
        return {
            name: this.Userservice.findById(id),
            task: task.task
        };
    }
    getTaskById(id) {
        return this.taskModel.findById(id);
    }
    getAll() {
        return this.taskModel.find().exec();
    }
    async deleteTask(id, updatedTaskData) {
        const taskUpdate = await this.taskModel.findByIdAndUpdate(id, updatedTaskData, { new: true });
        if (!taskUpdate) {
            throw new common_1.NotFoundException(`Can't find task with ID ${id}`);
        }
        return true;
    }
    async create(id, task) {
        const newTask = new this.taskModel({
            id,
            task
        });
        return newTask.save();
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], TaskService);
//# sourceMappingURL=task.service.js.map