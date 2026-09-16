"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const types_1 = require("../types/types");
class Task {
    id;
    title;
    description;
    priority;
    status;
    assignedTo;
    constructor(id, title, description, priority, status = types_1.TaskStatus.TODO, assignedTo) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.assignedTo = assignedTo;
    }
    start() {
        this.status = types_1.TaskStatus.IN_PROGRESS;
    }
    complete() {
        this.status = types_1.TaskStatus.COMPLETED;
    }
    assignUser(userId) {
        this.assignedTo = userId;
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map