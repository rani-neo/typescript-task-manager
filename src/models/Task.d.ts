import { Priority, TaskStatus } from "../types/types";
export declare class Task {
    readonly id: number;
    title: string;
    description: string;
    priority: Priority;
    status: TaskStatus;
    assignedTo?: number | undefined;
    constructor(id: number, title: string, description: string, priority: Priority, status?: TaskStatus, assignedTo?: number | undefined);
    start(): void;
    complete(): void;
    assignUser(userId: number): void;
}
//# sourceMappingURL=Task.d.ts.map