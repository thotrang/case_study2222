"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
class Album {
    constructor(nameAlbum) {
        this._id = 0;
        this._songs = [];
        this._nameAlbum = nameAlbum;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nameAlbum() {
        return this._nameAlbum;
    }
    set nameAlbum(value) {
        this._nameAlbum = value;
    }
    get songs() {
        return this._songs;
    }
    set songs(value) {
        this._songs = value;
    }
}
exports.Album = Album;
