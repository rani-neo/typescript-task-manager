import { Task } from "../models/Task";
interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
    add(item: T): void;
    delete(id: number): boolean;
}
type TaskUpdate = Partial<Pick<Task, "title" | "description" | "priority" | "status" | "assignedTo">>;
export declare class TaskService implements Repository<Task> {
    private tasks;
    getAll(): Task[];
    getById(id: number): Task | undefined;
    add(task: Task): void;
    update(id: number, updates: TaskUpdate): Task | undefined;
    delete(id: number): boolean;
}
export {};
//# sourceMappingURL=TaskService.d.ts.map