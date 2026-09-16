import { User } from "./User";

export class Manager extends User {

    constructor(
        id: number,
        name: string,
        email: string,
        public department: string
    ) {
        super(id, name, email, "MANAGER");
    }

    displayInfo(): void {
        console.log(
            `${this.name} is manager of ${this.department}`
        );
    }
}