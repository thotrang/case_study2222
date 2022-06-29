"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumManagement = void 0;
class AlbumManagement {
    createNew(t) {
        AlbumManagement.id++;
        t.id = AlbumManagement.id;
        AlbumManagement.albums.push(t);
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < AlbumManagement.albums.length; i++) {
            if (AlbumManagement.albums[i].id == id) {
                index = i;
            }
        }
        return index;
    }
    findByIdAlbum(id) {
        for (let i = 0; i < AlbumManagement.albums.length; i++) {
            if (AlbumManagement.albums[i].id == id) {
                return AlbumManagement.albums[i];
            }
        }
        return null;
    }
    getAll() {
        return AlbumManagement.albums;
    }
    removeById(id) {
        let indexRemove = this.findById(id);
        if (indexRemove != -1) {
            AlbumManagement.albums.splice(indexRemove, 1);
        }
        else {
            console.log('No album info!');
        }
    }
    updateById(id, name) {
        let index = this.findById(id);
        if (index != -1) {
            AlbumManagement.albums[index] = name;
        }
    }
    updateNameById(id, name) {
        let index = this.findById(id);
        if (index != -1) {
            AlbumManagement.albums[index].nameAlbum = name;
        }
    }
    findByName(name) {
        for (let i = 0; i < AlbumManagement.albums.length; i++) {
            if (AlbumManagement.albums[i].nameAlbum == name) {
                return AlbumManagement.albums[i];
            }
        }
        return null;
    }
}
exports.AlbumManagement = AlbumManagement;
AlbumManagement.id = 0;
AlbumManagement.albums = [];
