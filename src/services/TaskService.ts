import { Task } from "../models/Task";

interface Repository<T> {

    getAll(): T[];

    getById(id: number): T | undefined;

    add(item: T): void;

    delete(id: number): boolean;
}

type TaskUpdate = Partial<
    Pick<
        Task,
        "title" |
        "description" |
        "priority" |
        "status" |
        "assignedTo"
    >
>;

export class TaskService
    implements Repository<Task> {

    private tasks: Task[] = [];

    getAll(): Task[] {
        return this.tasks;
    }

    getById(id: number): Task | undefined {

        return this.tasks.find(
            task => task.id === id
        );
    }

    add(task: Task): void {

        const existingTask =
            this.getById(task.id);

        if (existingTask) {
            throw new Error(
                `Task with ID ${task.id} already exists`
            );
        }

        this.tasks.push(task);
    }

    update(
        id: number,
        updates: TaskUpdate
    ): Task | undefined {

        const task = this.getById(id);

        if (!task) {
            return undefined;
        }

        Object.assign(task, updates);

        return task;
    }

    delete(id: number): boolean {

        const index = this.tasks.findIndex(
            task => task.id === id
        );

        if (index === -1) {
            return false;
        }

        this.tasks.splice(index, 1);

        return true;
    }
}