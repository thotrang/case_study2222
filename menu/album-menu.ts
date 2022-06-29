import {AlbumManagement} from "../management/album/album-management";
import * as rl from 'readline-sync';
import {Album} from "../music/album";
import {User} from "../music/user";

enum AlbumChoice {
    SHOW_ALL_ALBUM = 1,
    CREATE_ALBUM = 2,
    REMOVE_ALBUM = 3,
    UPDATE_ALBUM = 4,
    SHOW_SONG_BY_ALBUM = 5,
    FIND_ALBUM_BY_NAME =6,


}

export class AlbumMenu {
    private albumManagement = new AlbumManagement();



    run(currentUser: User) {
        let choice = -1;
        do {
            console.log('---Album management---');
            console.log('1.Show all album:');
            console.log('2.Create album:')
            console.log('3.Delete album:');
            console.log('4.Update album:');
            console.log('5.Show songs by album:');
            console.log('0.Come back');
            choice = +rl.question("Enter the choice: ")
            switch (choice) {
                case AlbumChoice.SHOW_ALL_ALBUM: {
                    this.showAllAlbum();
                    break;
                }
                case AlbumChoice.CREATE_ALBUM:{
                    this.showCreateAlbum(currentUser);
                    break;
                }
                case AlbumChoice.REMOVE_ALBUM: {
                    this.inputRemoveAlbum();
                    break;

                }
                case AlbumChoice.UPDATE_ALBUM: {
                    this.inputUpdateAlbum();
                    break;

                }
                case AlbumChoice.SHOW_SONG_BY_ALBUM:{
                    this.showSongByAlbum();
                    break;
                }
                case AlbumChoice.FIND_ALBUM_BY_NAME:{
                    this.findAlbumByName();
                    break;

                }

            }

        } while (choice != 0)
    }


    findAlbumByName() {
        console.log('---Find album by name---');
        let name = rl.question('Enter name of album need to search:  ');
        let album = this.albumManagement.findByName(name);
        if (album) {
            for (let i = 0; i < album.songs.length; i++) {
                console.log(`${album.songs[i].id},Name Song: ${album.songs[i].nameSong}\t Singer :${album.songs[i].singer}`);
            }
        } else {
            console.log('No album!');
        }

    }

    showSongByAlbum() {
        let albums = this.albumManagement.getAll();
        console.log('---Show song by album---')
        if (albums.length == 0) {
            console.log('There are currently no song!')
        } else {
            for (let i = 0; i < albums.length; i++) {
                console.log(`Code: ${albums[i].id} | Name Album: ${albums[i].nameAlbum}\n`)
            }
            let nameAlbum = rl.question('Enter name album:');
            let album = this.albumManagement.findByName(nameAlbum);
            if (album == null) {
                console.log('Enter wrong name album!');
            } else {
                if (album.songs.length == 0) {
                    console.log('There are no song in the album!');
                } else {
                    for (let i = 0; i < albums.length; i++) {
                        if (albums[i].nameAlbum == nameAlbum) {
                            for (let j = 0; j < albums[i].songs.length; j++) {
                                if (albums[i].songs[j].albums !== null) {
                                    console.log(`Code: ${albums[i].songs[j].id}, Name song: ${albums[i].songs[j].nameSong}, Singer:${albums[i].songs[j].singer}\n`)
                                } else {
                                    continue;
                                }
                            }
                        } else {
                            continue;
                        }
                    }
                }
            }
        }

    }

    inputUpdateAlbum() {
        console.log('-Update info album-')
        let albums = this.albumManagement.getAll();
        for(let i = 0; i < albums.length; i++){
            console.log(`Code: ${albums[i].id}, Name ${albums[i].nameAlbum}`);
        }
        let id = +rl.question('Enter the id u want to edit:');
        let name =rl.question('Nhap ten moi cua album:');

        this.albumManagement.updateNameById(id, name);
    }

    inputRemoveAlbum() {
        console.log('-Enter the album u want to delete-')
        let id = +rl.question('Enter the index you want to delete:');
        this.albumManagement.removeById(id);
    }

    showCreateAlbum(currentUser: User) {
        console.log('---Add new song---')
        let album = this.inputAlbum();
        this.albumManagement.createNew(album);
        currentUser.albums.push(album);
    }

    inputAlbum() {
        let nameAlbum = rl.question('Enter the album name:');
        return new Album(nameAlbum);
    }

    showAllAlbum() {
        console.log('---Playlist song---')
        let albums = this.albumManagement.getAll();
        for (let i = 0; i < albums.length; i++) {
            console.log(`${albums[i].id}, ${albums[i].nameAlbum},`)
        }

    }

    showAlbumByUser(user: User): void{
        console.log('---Playlist song---')
        let albums = user.albums;
        for (let i = 0; i < albums.length; i++) {
            console.log(`${i + 1}, ${albums[i].nameAlbum},`)
        }
    }
}