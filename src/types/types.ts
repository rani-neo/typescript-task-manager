export enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}

export enum Priority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}

export interface IUser {
    id: number;
    name: string;
    email: string;
}

export type UserRole = "EMPLOYEE" | "MANAGER";

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}
