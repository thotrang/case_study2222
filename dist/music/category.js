"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(name) {
        this._id = 0;
        this._album = [];
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get albums() {
        return this._album;
    }
    set albums(value) {
        this._album = value;
    }
}
exports.Category = Category;
