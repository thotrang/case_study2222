"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMenu = void 0;
const rl = __importStar(require("readline-sync"));
const user_1 = require("./music/user");
const user_management_1 = require("./management/user-management");
class LoginMenu {
    constructor() {
        this.choice = -1;
        this.userManagement = new user_management_1.UserManagement();
    }
    inputUser() {
        let username = this.inputUsername();
        let regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
        let password = this.inputPassword(regexForPassword);
        let confirmPassword = this.inputConfirmPassword(password);
        let email = this.inputEmail();
        let name = rl.question('Enter the full name :');
        return new user_1.User(name, username, password, email);
    }
    inputEmail() {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question('Enter email:');
            let regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Invalid email format!');
            }
            else {
                isValidEmail = true;
                let currentUser = this.userManagement.findByEmail(email);
                if (currentUser) {
                    console.log('Email has already existed! ');
                    isValidEmail = false;
                }
                else {
                    isValidEmail = true;
                }
            }
        } while (!isValidEmail);
        return email;
    }
    inputConfirmPassword(password) {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Enter again password:');
            if (password != confirmPassword) {
                console.log('Re-enter password does not match!');
            }
        } while (password != confirmPassword);
    }
    inputUsername() {
        let isValidUsername = true;
        let username = '';
        do {
            username = rl.question('Enter username:');
            let currentUser = this.userManagement.findByUsername(username);
            if (currentUser) {
                isValidUsername = false;
                console.log('This account has already existed!');
            }
            else {
                isValidUsername = true;
            }
        } while (!isValidUsername);
        return username;
    }
    inputPassword(regexForPassword) {
        let isValidPassword = true;
        let password = '';
        do {
            password = rl.question('Enter password(1 uppercase character, 1 lowercase character, 1 special character and 1 number)');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Enter password 1 uppercase character, 1 lowercase character, 1 special character and 1 number!');
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    run() {
        let choice = -1;
        do {
            console.log('---User management system---');
            console.log('1.Sign in');
            console.log('2.Register');
            console.log('3.Exit');
            choice = +rl.question('Enter of your choice:');
            switch (choice) {
                case 1: {
                    console.log('---Sign in account---');
                }
                case 2: {
                    console.log('---Register account---');
                    let user = this.inputUser();
                    this.userManagement.creatNew(user);
                    console.log('Register successful!');
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.LoginMenu = LoginMenu;
