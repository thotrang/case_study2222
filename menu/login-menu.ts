import * as rl from "readline-sync";
import {User} from "../music/user";
import {UserManagement} from "../management/user/user-management";
import {Role} from "../music/role";
import {AdminMenu} from "./admin-menu";
import {UserMenu} from "./user-menu";

enum LoginChoice {
    LOGIN = 1,
    REGISTER = 2
}

export class LoginMenu {
    choice = -1;
    private userManagement = new UserManagement();
    private adminMenu = new AdminMenu()
    private userMenu = new UserMenu()
    inputUser(): User {
        let username = this.inputUsername();
        let regexForPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
        let password = this.inputPassword(regexForPassword);
        let confirmPassword = this.inputConfirmPassword(password)
        let email = this.inputEmail();
        let name = rl.question('Enter the full name :')
        return new User(name, username, password, email);

    }

    inputEmail(): string {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question('Enter email:')
            let regexForEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Invalid email format!')
            } else {
                isValidEmail = true;
                let currentUser = this.userManagement.findByEmail(email);
                if (currentUser) {
                    console.log('Email has already existed! ')
                    isValidEmail = false;
                } else {
                    isValidEmail = true;
                }
            }

        } while (!isValidEmail)
        return email;
    }

    inputConfirmPassword(password: string): void {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Enter again password:');
            if (password != confirmPassword) {
                console.log('Re-enter password does not match!')
            }
        } while (password != confirmPassword)

    }

    inputUsername(): string {
        let isValidUsername = true;
        let username = '';
        do {
            username = rl.question('Enter username:');
            let currentUser = this.userManagement.findByUsername(username);
            if (currentUser) {
                isValidUsername = false;
                console.log('This account has already existed!')
            } else {
                isValidUsername = true;
            }

        } while (!isValidUsername);
        return username;
    }

    inputPassword(regexForPassword: RegExp): string {
        let isValidPassword = true;
        let password = '';
        do {
            password = rl.question('Enter password(1 uppercase character, 1 lowercase character, 1 special character and 1 number)');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Enter password 1 uppercase character, 1 lowercase character, 1 special character and 1 number!')
            } else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }

    run() {
        let choice = -1
        do {
            console.log('---User management system---');
            console.log('1.Sign in');
            console.log('2.Register');
            console.log('3.Exit');
            choice = +rl.question('Enter of your choice:');
            switch (choice) {
                case LoginChoice.LOGIN : {
                    this.loginForm();
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log('---Register account---');
                    this.registerForm();

                    break;

                }
            }
        } while (choice != 0);
    }

    registerForm() {
        let user = this.inputUser();
        this.userManagement.createNew(user);
        console.log('Register successful!');
    }

    loginForm() {
        console.log('---Sign in account---');
        let username = rl.question('Enter the account :');
        let password = rl.question('Enter the password:');
        let currentUser = this.userManagement.login(username, password);
        if (currentUser) {
            console.log('Log in successful!');
            if (currentUser.role == Role.ADMIN) {
                this.adminMenu.run(currentUser);

            }else {
                this.userMenu.run(currentUser);
            }
        } else {
            console.log('Incorrect account or password !');

        }
    }
}
