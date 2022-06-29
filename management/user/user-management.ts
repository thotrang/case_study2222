
import {User} from "../../music/user";
import {IUserManagement} from "./i-user-management";
import {Role} from "../../music/role";

export class UserManagement implements IUserManagement {
    private static users: User [] = [];
    private static id: number =1;

    constructor() {
        let admin = new User('butterfly','admin','123456', 'admin@gmail.com');
        admin.id = UserManagement.id;
        admin.role = Role.ADMIN;
        UserManagement.users.push(admin);
    }

    createNew(t: User): void {
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role = Role.USER;
        UserManagement.users.push(t);
    }

    getAll(): User[] {
        return UserManagement.users;
    }

    removeById(id: number): void {
        let index = this.findById(id);
        if (index != -1){
            UserManagement.users.splice(index,1);
        }

    }

    updateById(id: number, t: User): void  {
        let index = this.findById(id);
        if (index != -1){
            UserManagement.users[index] = t;
        }
    }

    findByUsername(username: string): User | null {
        for (let User of UserManagement.users) {
            if (username == User.username){
                return User;
            }

        }
        return null;
    }

    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;

            }

        }
        return index;
    }

    findByEmail(email: string): User | null {
        for (let User of UserManagement.users) {
            if (email == User.email){
                return User;
            }

        }
        return null;
    }
    login(username: string, password: string): User | null {
        for (let user of UserManagement.users) {
            if (username == user.username && password == user.password){
                return user;

            }
            
        }
        return null;

    }

    findByName(name: string): User | null {
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].name == name){
                return UserManagement.users[i]
            }

        }
        return null;
    }

}