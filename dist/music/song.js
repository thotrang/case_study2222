"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
class Song {
    constructor(nameSong, singer) {
        this._id = 0;
        this._albums = [];
        this._nameSong = nameSong;
        this._singer = singer;
    }
    get nameSong() {
        return this._nameSong;
    }
    set nameSong(value) {
        this._nameSong = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get singer() {
        return this._singer;
    }
    set singer(value) {
        this._singer = value;
    }
    get albums() {
        return this._albums;
    }
    set albums(value) {
        this._albums = value;
    }
}
exports.Song = Song;
