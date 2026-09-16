import { User } from "./models/User";
import { Manager } from "./models/Manager";
import { Task } from "./models/Task";
import { TaskService } from "./services/TaskService";
import { Logger } from "./utils/Logger";
import {
    Priority,
    TaskStatus,
    ApiResponse
} from "./types/types";

console.log("\n=== TYPESCRIPT TASK MANAGEMENT SYSTEM ===\n");


// ---------------------------------
// USERS
// ---------------------------------

const user1 = new User(
    1,
    "John Smith",
    "john@example.com"
);

const user2 = new User(
    2,
    "Sarah Jones",
    "sarah@example.com"
);

const manager = new Manager(
    3,
    "Rashmi",
    "manager@example.com",
    "Technology"
);

console.log("USERS");

user1.displayInfo();
user2.displayInfo();
manager.displayInfo();


// ---------------------------------
// TASK SERVICE
// ---------------------------------

const taskService = new TaskService();


// ---------------------------------
// CREATE TASKS
// ---------------------------------

const task1 = new Task(
    101,
    "Fix API",
    "Investigate API timeout",
    Priority.HIGH
);

const task2 = new Task(
    102,
    "Update Documentation",
    "Update technical documentation",
    Priority.MEDIUM
);

const task3 = new Task(
    103,
    "Write Tests",
    "Create unit tests",
    Priority.LOW
);


// ---------------------------------
// ADD TASKS
// ---------------------------------

try {

    taskService.add(task1);
    taskService.add(task2);
    taskService.add(task3);

    Logger.info("Tasks successfully created");

} catch (error: unknown) {

    if (error instanceof Error) {
        Logger.error(error.message);
    }
}


// ---------------------------------
// ASSIGN TASK
// ---------------------------------

task1.assignUser(user1.id);

Logger.info(
    `Task ${task1.id} assigned to ${user1.name}`
);


// ---------------------------------
// START TASK
// ---------------------------------

task1.start();

Logger.info(
    `Task ${task1.id} started`
);


// ---------------------------------
// COMPLETE TASK
// ---------------------------------

task1.complete();

Logger.info(
    `Task ${task1.id} completed`
);


// ---------------------------------
// UPDATE TASK
// ---------------------------------

taskService.update(
    102,
    {
        priority: Priority.HIGH,
        status: TaskStatus.IN_PROGRESS
    }
);


// ---------------------------------
// GET ONE TASK
// ---------------------------------

const foundTask =
    taskService.getById(102);

if (foundTask) {

    console.log(
        "\nFound Task:",
        foundTask
    );
}


// ---------------------------------
// GENERIC API RESPONSE
// ---------------------------------

const response: ApiResponse<Task[]> = {

    success: true,

    data: taskService.getAll(),

    message: "Tasks retrieved successfully"
};

console.log("\nAPI RESPONSE");

console.log(response);


// ---------------------------------
// FILTER
// ---------------------------------

const highPriorityTasks =
    taskService
        .getAll()
        .filter(
            task =>
                task.priority === Priority.HIGH
        );

console.log("\nHIGH PRIORITY TASKS");

console.log(highPriorityTasks);


// ---------------------------------
// DELETE
// ---------------------------------

const deleted =
    taskService.delete(103);

console.log(
    "\nTask 103 deleted:",
    deleted
);


// ---------------------------------
// FINAL RESULT
// ---------------------------------

console.log("\nFINAL TASK LIST");

console.table(
    taskService.getAll()
);