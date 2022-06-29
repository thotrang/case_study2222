import {Album} from "./album";

export class Song{
    private _nameSong: string;
    private _id: number=0;
    private _singer: string;
    private _albums: Album[] = []

    constructor(nameSong: string, singer: string) {
        this._nameSong = nameSong;

        this._singer = singer;
    }

    get nameSong(): string {
        return this._nameSong;
    }

    set nameSong(value: string) {
        this._nameSong = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    get albums(): Album[] {
        return this._albums;
    }

    set albums(value: Album[]) {
        this._albums = value;
    }
}