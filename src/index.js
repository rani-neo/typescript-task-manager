"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const Manager_1 = require("./models/Manager");
const Task_1 = require("./models/Task");
const TaskService_1 = require("./services/TaskService");
const Logger_1 = require("./utils/Logger");
const types_1 = require("./types/types");
console.log("\n=== TYPESCRIPT TASK MANAGEMENT SYSTEM ===\n");
// ---------------------------------
// USERS
// ---------------------------------
const user1 = new User_1.User(1, "John Smith", "john@example.com");
const user2 = new User_1.User(2, "Sarah Jones", "sarah@example.com");
const manager = new Manager_1.Manager(3, "Rashmi", "manager@example.com", "Technology");
console.log("USERS");
user1.displayInfo();
user2.displayInfo();
manager.displayInfo();
// ---------------------------------
// TASK SERVICE
// ---------------------------------
const taskService = new TaskService_1.TaskService();
// ---------------------------------
// CREATE TASKS
// ---------------------------------
const task1 = new Task_1.Task(101, "Fix API", "Investigate API timeout", types_1.Priority.HIGH);
const task2 = new Task_1.Task(102, "Update Documentation", "Update technical documentation", types_1.Priority.MEDIUM);
const task3 = new Task_1.Task(103, "Write Tests", "Create unit tests", types_1.Priority.LOW);
// ---------------------------------
// ADD TASKS
// ---------------------------------
try {
    taskService.add(task1);
    taskService.add(task2);
    taskService.add(task3);
    Logger_1.Logger.info("Tasks successfully created");
}
catch (error) {
    if (error instanceof Error) {
        Logger_1.Logger.error(error.message);
    }
}
// ---------------------------------
// ASSIGN TASK
// ---------------------------------
task1.assignUser(user1.id);
Logger_1.Logger.info(`Task ${task1.id} assigned to ${user1.name}`);
// ---------------------------------
// START TASK
// ---------------------------------
task1.start();
Logger_1.Logger.info(`Task ${task1.id} started`);
// ---------------------------------
// COMPLETE TASK
// ---------------------------------
task1.complete();
Logger_1.Logger.info(`Task ${task1.id} completed`);
// ---------------------------------
// UPDATE TASK
// ---------------------------------
taskService.update(102, {
    priority: types_1.Priority.HIGH,
    status: types_1.TaskStatus.IN_PROGRESS
});
// ---------------------------------
// GET ONE TASK
// ---------------------------------
const foundTask = taskService.getById(102);
if (foundTask) {
    console.log("\nFound Task:", foundTask);
}
// ---------------------------------
// GENERIC API RESPONSE
// ---------------------------------
const response = {
    success: true,
    data: taskService.getAll(),
    message: "Tasks retrieved successfully"
};
console.log("\nAPI RESPONSE");
console.log(response);
// ---------------------------------
// FILTER
// ---------------------------------
const highPriorityTasks = taskService
    .getAll()
    .filter(task => task.priority === types_1.Priority.HIGH);
console.log("\nHIGH PRIORITY TASKS");
console.log(highPriorityTasks);
// ---------------------------------
// DELETE
// ---------------------------------
const deleted = taskService.delete(103);
console.log("\nTask 103 deleted:", deleted);
// ---------------------------------
// FINAL RESULT
// ---------------------------------
console.log("\nFINAL TASK LIST");
console.table(taskService.getAll());
//# sourceMappingURL=index.js.map