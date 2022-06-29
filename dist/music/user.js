"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, username, password, email) {
        this._role = 0;
        this._id = 0;
        this._albums = [];
        this._songs = [];
        this._name = name;
        this._username = username;
        this._password = password;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get albums() {
        return this._albums;
    }
    set albums(value) {
        this._albums = value;
    }
    get songs() {
        return this._songs;
    }
    set songs(value) {
        this._songs = value;
    }
}
exports.User = User;
