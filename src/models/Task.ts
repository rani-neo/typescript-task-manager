import {
    Priority,
    TaskStatus
} from "../types/types";

export class Task {

    constructor(
        public readonly id: number,
        public title: string,
        public description: string,
        public priority: Priority,
        public status: TaskStatus = TaskStatus.TODO,
        public assignedTo?: number
    ) {}

    start(): void {
        this.status = TaskStatus.IN_PROGRESS;
    }

    complete(): void {
        this.status = TaskStatus.COMPLETED;
    }

    assignUser(userId: number): void {
        this.assignedTo = userId;
    }
}