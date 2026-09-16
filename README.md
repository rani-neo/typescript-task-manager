# TypeScript Task Management System

A console-based Task Management System built with **TypeScript and Node.js**.

The project demonstrates core and intermediate TypeScript concepts, object-oriented programming, modular architecture, type safety, and separation of concerns without using a frontend framework.

## Features

* Create and manage users
* Create managers using inheritance
* Create tasks with different priorities and statuses
* Assign tasks to users
* Start and complete tasks
* Search for tasks by ID
* Filter tasks by priority
* Delete tasks
* Return strongly typed API-style responses
* Log application activity
* Display task information in the terminal

## Technologies

* TypeScript
* Node.js
* npm
* TypeScript Compiler (`tsc`)

## TypeScript Concepts Demonstrated

This project demonstrates several important TypeScript concepts:

### Interfaces

Interfaces define the structure that objects must follow and provide compile-time type checking.

```typescript
interface IUser {
  id: number;
  name: string;
  email: string;
}
```

### Enums

Enums are used to restrict values such as task status and priority.

```typescript
enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED"
}

enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}
```

### Classes

Classes are used to model entities such as users, managers, and tasks.

```typescript
class User {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}
}
```

### Inheritance

The `Manager` class extends the `User` class, demonstrating inheritance and code reuse.

```typescript
class Manager extends User {
  // Manager-specific functionality
}
```

### Generics

Generic types allow reusable and type-safe structures such as API responses.

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
```

For example:

```typescript
ApiResponse<Task[]>
```

ensures that the response contains an array of `Task` objects.

### Strict Type Checking

The project uses TypeScript's strict mode:

```json
"strict": true
```

This helps identify potential type-related problems during development rather than at runtime.

## Project Structure

```text
typescript-task-manager/
│
├── src/
│   ├── models/
│   │   ├── User.ts
│   │   ├── Manager.ts
│   │   └── Task.ts
│   │
│   ├── services/
│   │   └── TaskService.ts
│   │
│   ├── types/
│   │   └── types.ts
│   │
│   ├── utils/
│   │   └── Logger.ts
│   │
│   └── index.ts
│
├── dist/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Architecture

The application follows a simple separation-of-concerns approach.

**Models** represent application entities such as users, managers, and tasks.

**Services** contain the business logic for managing tasks.

**Types** contain shared TypeScript interfaces, enums, and other type definitions.

**Utils** contain reusable utility functionality such as logging.

**index.ts** is the entry point of the application and demonstrates the functionality of the system.

## Installation

Clone the repository and enter the project directory:

```bash
git clone <your-repository-url>
cd typescript-task-manager
```

Install the dependencies:

```bash
npm install
```

## Build

Compile the TypeScript source code into JavaScript:

```bash
npm run build
```

The compiled JavaScript files are generated inside the `dist` directory.

## Run

Run the compiled application:

```bash
npm start
```

The application output will be displayed in the terminal.

## Development

Compile and run the application using:

```bash
npm run dev
```

## npm Scripts

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc && node dist/index.js"
}
```

### `npm run build`

Compiles TypeScript files from the `src` directory into JavaScript files in the `dist` directory.

### `npm start`

Runs the compiled JavaScript application using Node.js.

### `npm run dev`

Compiles the TypeScript project and then runs the application.

## Example Output

```text
=== TYPESCRIPT TASK MANAGEMENT SYSTEM ===

USERS
1: John Smith | john@example.com | EMPLOYEE
2: Sarah Jones | sarah@example.com | EMPLOYEE

Rashmi is manager of Technology

Tasks successfully created
Task 101 assigned to John Smith
Task 101 started
Task 101 completed

HIGH PRIORITY TASKS

101 - Fix API - COMPLETED
102 - Update Documentation - IN_PROGRESS
```

## Design Decisions

The project separates models, business logic, shared types, and utility functions into different modules. This makes the code easier to understand, maintain, test, and extend.

TypeScript's strict type checking is used to catch potential errors during development and make the application's data structures explicit.

Enums are used for task priorities and statuses so that invalid values cannot easily be introduced into the application.

Generics are used for API-style responses so that the same response structure can safely work with different data types.

## Possible Future Improvements

Future versions could include:

* Persistent database storage
* REST API endpoints
* Authentication and authorization
* Unit testing
* Task due dates
* Task categories
* Additional validation
* Error-handling classes
* Web-based user interface

## Purpose

This project was created to demonstrate practical TypeScript knowledge, including:

* Strong typing
* Interfaces
* Enums
* Classes
* Constructors
* Inheritance
* Generics
* Modules
* Object-oriented programming
* Array operations
* Service-layer architecture
* Error handling
* TypeScript compilation
* Node.js execution

## Author

**Rashmi Rani**

Software Engineering | Full Stack Development | Cloud & DevOps
