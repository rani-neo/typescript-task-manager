import { IUser, UserRole } from "../types/types";
export declare class User implements IUser {
    readonly id: number;
    name: string;
    email: string;
    role: UserRole;
    constructor(id: number, name: string, email: string, role?: UserRole);
    displayInfo(): void;
}
//# sourceMappingURL=User.d.ts.map