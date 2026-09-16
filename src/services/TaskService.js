"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const Task_1 = require("../models/Task");
class TaskService {
    tasks = [];
    getAll() {
        return this.tasks;
    }
    getById(id) {
        return this.tasks.find(task => task.id === id);
    }
    add(task) {
        const existingTask = this.getById(task.id);
        if (existingTask) {
            throw new Error(`Task with ID ${task.id} already exists`);
        }
        this.tasks.push(task);
    }
    update(id, updates) {
        const task = this.getById(id);
        if (!task) {
            return undefined;
        }
        Object.assign(task, updates);
        return task;
    }
    delete(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            return false;
        }
        this.tasks.splice(index, 1);
        return true;
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map