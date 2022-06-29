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
exports.SongMenu = void 0;
const song_management_1 = require("../management/song/song-management");
const rl = __importStar(require("readline-sync"));
const song_1 = require("../music/song");
const album_management_1 = require("../management/album/album-management");
var SongChoice;
(function (SongChoice) {
    SongChoice[SongChoice["SHOW_ALL_SONG"] = 1] = "SHOW_ALL_SONG";
    SongChoice[SongChoice["CREATE_SONG"] = 2] = "CREATE_SONG";
    SongChoice[SongChoice["REMOVE_SONG"] = 3] = "REMOVE_SONG";
    SongChoice[SongChoice["ADD_SONG_TO_ALBUM"] = 4] = "ADD_SONG_TO_ALBUM";
    SongChoice[SongChoice["FIND_SONG_BY_Name"] = 5] = "FIND_SONG_BY_Name";
    SongChoice[SongChoice["UPDATE_SONG"] = 6] = "UPDATE_SONG";
})(SongChoice || (SongChoice = {}));
class SongMenu {
    constructor() {
        this.songManagement = new song_management_1.SongManagement();
        this.albumManagement = new album_management_1.AlbumManagement();
    }
    run(currentUser) {
        let choice = -1;
        do {
            console.log('---Song management---');
            console.log('1.Show all song');
            console.log('2.Add song');
            console.log('3.Delete song');
            console.log('4.Add song to album');
            console.log('5.Find song by name');
            console.log('6.Update song');
            console.log('0.Come back');
            choice = +rl.question("Enter the choice: ");
            switch (choice) {
                case SongChoice.SHOW_ALL_SONG: {
                    this.showAllSongs();
                    break;
                }
                case SongChoice.CREATE_SONG: {
                    this.showCreateSong();
                    break;
                }
                case SongChoice.REMOVE_SONG: {
                    this.inputRemoveSong(currentUser);
                    break;
                }
                case SongChoice.ADD_SONG_TO_ALBUM: {
                    this.addSongToAlbum(currentUser);
                    break;
                }
                case SongChoice.FIND_SONG_BY_Name: {
                    this.findNameBySong(currentUser);
                }
                case SongChoice.UPDATE_SONG: {
                    this.updateSong();
                }
            }
        } while (choice != 0);
    }
    updateSong() {
        console.log('-Update info song-');
        let songs = this.songManagement.getAll();
        for (let i = 0; i < songs.length; i++) {
            console.log(`Code: ${songs[i].id}, Name Song: ${songs[i].nameSong}`);
        }
        let id = +rl.question('Enter the id u want to edit:');
        let indexUpdate = this.songManagement.findById(id);
        let song = this.songManagement.findByIdSong(id);
        if (indexUpdate !== -1) {
            if (song !== null) {
                song.id = id;
                song.nameSong = rl.question('Enter the name of song:');
                if (song.albums.length !== 0) {
                    song.albums = songs[indexUpdate].albums;
                }
                else {
                    song.albums = [];
                }
                // this.songManagement.updateById(indexUpdate, song);
            }
        }
        else {
            console.log('Enter again name album!');
        }
    }
    findNameBySong(currentUser) {
        console.log('Find song by name');
        let name = rl.question('Enter the name of song u need to search:');
        let song = this.songManagement.findByName(name);
        if (song) {
            for (let i = 0; i < song.albums.length; i++) {
                console.log(`${i + 1},Name Song: ${song.albums[i].nameAlbum}`);
            }
        }
        else {
            console.log('No song!');
        }
    }
    addSongToAlbum(currentUser) {
        console.log('---Add song to album---');
        let songs = this.songManagement.getAll();
        let albums = this.albumManagement.getAll();
        if (albums.length == 0) {
            console.log('There are currently no song!');
        }
        for (let i = 0; i < songs.length; i++) {
            console.log(`${songs[i].id},${songs[i].nameSong},${songs[i].singer}`);
        }
        let nameSong = rl.question('Enter name of the song need put in the album:');
        let song = this.songManagement.findByName(nameSong);
        if (!song) {
            console.log('Song code does not exist!');
        }
        else {
            let nameAlbum = rl.question('Enter the nameAlbum of song need add:');
            let album = this.albumManagement.findByName(nameAlbum);
            if (album !== null) {
                album.songs.push(song);
            }
            else {
                console.log('The name of the song does not exist!');
            }
        }
    }
    inputRemoveSong(currentUser) {
        console.log('Delete song');
        let index = +rl.question('Enter the index u want to delete:');
        this.songManagement.removeById(index);
    }
    showCreateSong() {
        console.log('---Add new song---');
        let playlists = this.inputSong();
        this.songManagement.createNew(playlists);
    }
    inputSong() {
        let songName = rl.question('Enter the song name: ');
        let singer = rl.question('Enter the name of singer:');
        new song_1.Song(songName, singer);
        return new song_1.Song(songName, singer);
    }
    showAllSongs() {
        console.log('---Playlist---');
        let playlist = this.songManagement.getAll();
        for (let i = 0; i < playlist.length; i++) {
            console.log(`${i + 1},${playlist[i].nameSong},${playlist[i].singer}`);
        }
    }
    showAddSongToAlbumByUser(currentUser) {
        console.log('---Add song to album---');
        let songs = this.songManagement.getAll();
        let albums = this.albumManagement.getAll();
        if (albums.length == 0) {
            console.log('There are currently no song!');
        }
        for (let i = 0; i < songs.length; i++) {
            console.log(`${i + 1},${songs[i].nameSong},${songs[i].singer}`);
        }
        let id = +rl.question('Enter the name of the song need put in the album:');
        let albumIndex = this.albumManagement.findById(id);
        if (albumIndex == -1) {
            console.log('Album code does not exist!');
        }
        else {
            let songName = rl.question('Enter the name of song need add:');
            let song = this.songManagement.findByName(songName);
            if (song != null) {
                albums[albumIndex].songs = songs;
                song.albums.push(albums[albumIndex]);
            }
            else {
                console.log('The name of the song does not exist!');
            }
        }
    }
}
exports.SongMenu = SongMenu;
