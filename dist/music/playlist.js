"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
class Playlist {
    constructor(song) {
        this._song = [];
        this._song = song;
    }
    get song() {
        return this._song;
    }
    set song(value) {
        this._song = value;
    }
}
exports.Playlist = Playlist;
