import { IUser, UserRole } from "../types/types";

export class User implements IUser {

    constructor(
        public readonly id: number,
        public name: string,
        public email: string,
        public role: UserRole = "EMPLOYEE"
    ) {}

    displayInfo(): void {
        console.log(
            `${this.id}: ${this.name} | ${this.email} | ${this.role}`
        );
    }
}