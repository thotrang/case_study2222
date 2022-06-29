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
exports.AdminMenu = void 0;
const rl = __importStar(require("readline-sync"));
const album_menu_1 = require("./album-menu");
const song_menu_1 = require("./song-menu");
const user_menu_1 = require("./user-menu");
var AdminChoice;
(function (AdminChoice) {
    AdminChoice[AdminChoice["ALBUM_MANAGEMENT"] = 1] = "ALBUM_MANAGEMENT";
    AdminChoice[AdminChoice["SONG_MANAGEMENT"] = 2] = "SONG_MANAGEMENT";
    AdminChoice[AdminChoice["USER_MANAGEMENT"] = 3] = "USER_MANAGEMENT";
})(AdminChoice || (AdminChoice = {}));
class AdminMenu {
    constructor() {
        this.albumMenu = new album_menu_1.AlbumMenu();
        this.songMenu = new song_menu_1.SongMenu();
        this.userMenu = new user_menu_1.UserMenu();
    }
    run(currentUser) {
        let choice = -1;
        do {
            console.log('---Album management app---');
            console.log('1.Album management:');
            console.log('2.Song management');
            console.log('3.User management:');
            console.log('0.Log out');
            choice = +rl.question('Enter the choice:');
            switch (choice) {
                case AdminChoice.ALBUM_MANAGEMENT: {
                    this.albumMenu.run(currentUser);
                    break;
                }
                case AdminChoice.SONG_MANAGEMENT: {
                    this.songMenu.run(currentUser);
                    break;
                }
                case AdminChoice.USER_MANAGEMENT: {
                    this.userMenu.run(currentUser);
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.AdminMenu = AdminMenu;
