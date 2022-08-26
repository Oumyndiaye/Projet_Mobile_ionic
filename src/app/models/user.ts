import { Role } from "./role";

export interface User {
    id: String;
    name: String;
    email: String;
    password: String;
    role:Role
}