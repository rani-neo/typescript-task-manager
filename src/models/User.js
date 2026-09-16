"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const types_1 = require("../types/types");
class User {
    id;
    name;
    email;
    role;
    constructor(id, name, email, role = "EMPLOYEE") {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    displayInfo() {
        console.log(`${this.id}: ${this.name} | ${this.email} | ${this.role}`);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map