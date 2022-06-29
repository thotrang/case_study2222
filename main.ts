import { LoginMenu } from "./menu/login-menu";
import { User } from "./music/user";
import { UserManagement } from "./management/user/user-management";
import { Role } from "./music/role";

let arr = new UserManagement();
let admin = new User('butterfly', 'admin', '123456', 'admin@gmail.com');
admin.id = 1;
admin.role = Role.ADMIN;
arr.getAll().push(admin);

let loginMenu = new LoginMenu();
loginMenu.run()

