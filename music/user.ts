import {Album} from "./album";
import { Role } from "./role";
import {Song} from "./song";

export class User {
    private _name: string;
    private _username: string;
    private _password: string;
    private _role :Role = Role.USER;
    private _email: string;
    private _id: number =0;
    private _albums: Album[]=[];
    private _songs: Song[]=[];


    constructor(name: string, username: string, password: string, email: string) {
        this._name = name;
        this._username = username;
        this._password = password;
        this._email = email;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get albums(): Album[] {
        return this._albums;
    }

    set albums(value: Album[]) {
        this._albums = value;
    }

    get songs(): Song[] {
        return this._songs;
    }

    set songs(value: Song[]) {
        this._songs = value;
    }
}