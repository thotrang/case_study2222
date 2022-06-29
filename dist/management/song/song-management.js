"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongManagement = void 0;
class SongManagement {
    createNew(t) {
        SongManagement.id++;
        t.id = SongManagement.id;
        SongManagement.songs.push(t);
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < SongManagement.songs.length; i++) {
            if (SongManagement.songs[i].id == id) {
                index = i;
            }
        }
        return index;
    }
    getAll() {
        return SongManagement.songs;
    }
    removeById(id) {
        let index = this.findById(id);
        console.log(index);
        if (index != -1) {
            SongManagement.songs.splice(index, 1);
        }
        else {
            console.log('No song info!');
        }
    }
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            SongManagement.songs[index] = t;
        }
    }
    findByName(name) {
        for (let i = 0; i < SongManagement.songs.length; i++) {
            if (SongManagement.songs[i].nameSong == name) {
                return SongManagement.songs[i];
            }
        }
        return null;
    }
    findByIdSong(id) {
        for (let i = 0; i < SongManagement.songs.length; i++) {
            if (SongManagement.songs[i].id == id) {
                return SongManagement.songs[i];
            }
        }
        return null;
    }
}
exports.SongManagement = SongManagement;
SongManagement.id = 0;
SongManagement.songs = [];
