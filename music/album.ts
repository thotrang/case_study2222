import {Song} from "./song";

export class Album{
    private _id : number = 0;
    private _nameAlbum : string;
    private _songs: Song[] =[];

    constructor( nameAlbum: string) {

        this._nameAlbum = nameAlbum;

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameAlbum(): string {
        return this._nameAlbum;
    }

    set nameAlbum(value: string) {
        this._nameAlbum = value;
    }

    get songs(): Song[] {
        return this._songs;
    }

    set songs(value: Song[]) {
        this._songs = value;
    }
}