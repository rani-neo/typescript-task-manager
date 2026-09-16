"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const User_1 = require("./User");
class Manager extends User_1.User {
    department;
    constructor(id, name, email, department) {
        super(id, name, email, "MANAGER");
        this.department = department;
    }
    displayInfo() {
        console.log(`${this.name} is manager of ${this.department}`);
    }
}
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map