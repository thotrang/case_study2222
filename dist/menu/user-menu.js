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
exports.UserMenu = void 0;
const song_menu_1 = require("./song-menu");
const rl = __importStar(require("readline-sync"));
const album_menu_1 = require("./album-menu");
const user_management_1 = require("../management/user/user-management");
class UserMenu {
    constructor() {
        this.songMenu = new song_menu_1.SongMenu();
        this.albumMenu = new album_menu_1.AlbumMenu();
        this.userMenu = new user_management_1.UserManagement();
    }
    run(currentUser) {
        let choice = -1;
        do {
            console.log('---User app---');
            console.log('1.Show album:');
            console.log('2.Create album:');
            console.log('3.Add song to album :');
            console.log('4.Delete song:');
            console.log('5.Find name song:');
            console.log('0.Log out');
            choice = +rl.question('Enter the choice:');
            switch (choice) {
                case 1: {
                    console.log('Show album');
                    this.albumMenu.showAlbumByUser(currentUser);
                    break;
                }
                case 2: {
                    console.log('Create album');
                    this.albumMenu.showCreateAlbum(currentUser);
                    break;
                }
                case 3: {
                    console.log('Add song to album');
                    this.songMenu.showAddSongToAlbumByUser(currentUser);
                    break;
                }
                case 4: {
                    console.log('Delete song');
                    this.songMenu.inputRemoveSong(currentUser);
                    break;
                }
                case 5: {
                    console.log('Find name song');
                    this.songMenu.findNameBySong(currentUser);
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.UserMenu = UserMenu;
