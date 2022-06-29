import {SongManagement} from "../management/song/song-management";
import * as rl from "readline-sync";
import {Song} from "../music/song";
import {AlbumManagement} from "../management/album/album-management";
import {User} from "../music/user";
enum SongChoice {
    SHOW_ALL_SONG = 1,
    CREATE_SONG = 2,
    REMOVE_SONG = 3,
    ADD_SONG_TO_ALBUM =4,
    FIND_SONG_BY_Name = 5,
    UPDATE_SONG = 6,


}

export class SongMenu {
    private songManagement = new SongManagement();
    private albumManagement = new AlbumManagement();
    run(currentUser: User) {
        let choice = -1;
        do {
            console.log('---Song management---');
            console.log('1.Show all song');
            console.log('2.Add song');
            console.log('3.Delete song');
            console.log('4.Add song to album');
            console.log('5.Find song by name');
            console.log('6.Update song')
            console.log('0.Come back');
            choice = +rl.question("Enter the choice: ")
            switch (choice) {
                case SongChoice.SHOW_ALL_SONG:{
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
                case SongChoice.UPDATE_SONG:{
                    this.updateSong();
                }
            }
        }while (choice != 0)
    }

    updateSong() {
        console.log('-Update info song-')
        let songs = this.songManagement.getAll();
        for(let i = 0; i < songs.length; i++){
            console.log(`Code: ${songs[i].id}, Name Song: ${songs[i].nameSong}`);
        }
        let id = +rl.question('Enter the id u want to edit:');
        let indexUpdate = this.songManagement.findById(id);
        let song = this.songManagement.findByIdSong(id);
        if(indexUpdate !== -1){
            if(song !== null){
                song.id = id;
                song.nameSong = rl.question('Enter the name of song:');
                if(song.albums.length !== 0){
                    song.albums = songs[indexUpdate].albums;
                }else {
                    song.albums = [];
                }
                // this.songManagement.updateById(indexUpdate, song);
            }
        }else {
            console.log('Enter again name album!')
        }
    }

    findNameBySong(currentUser: User) {
        console.log('Find song by name')
        let name = rl.question('Enter the name of song u need to search:')
        let song = this.songManagement.findByName(name);
        if (song) {
            for (let i = 0; i < song.albums.length; i++) {
                console.log(`${i + 1},Name Song: ${song.albums[i].nameAlbum}`);
            }
        } else {
            console.log('No song!');
        }
    }

    addSongToAlbum(currentUser:User) {
        console.log('---Add song to album---')
        let songs = this.songManagement.getAll();
        let albums = this.albumManagement.getAll();
        if (albums.length == 0) {
            console.log('There are currently no song!')
        }
        for (let i = 0; i < songs.length; i++) {
            console.log(`${songs[i].id},${songs[i].nameSong},${songs[i].singer}`);
        }
        let nameSong = rl.question('Enter name of the song need put in the album:')
        let song = this.songManagement.findByName(nameSong);
        if (!song) {
            console.log('Song code does not exist!');
        } else {
            let nameAlbum = rl.question('Enter the nameAlbum of song need add:')
            let album = this.albumManagement.findByName(nameAlbum);
            if ( album!== null) {
                album.songs.push(song);
            } else {
                console.log('The name of the song does not exist!')

            }

        }
    }

    inputRemoveSong(currentUser : User) {
        console.log('Delete song')
        let index = +rl.question('Enter the index u want to delete:');
        this.songManagement.removeById(index);
    }

    showCreateSong() {
        console.log('---Add new song---')
        let playlists = this.inputSong();
        this.songManagement.createNew(playlists);
    }

    inputSong() {
        let songName = rl.question('Enter the song name: ');
        let singer = rl.question('Enter the name of singer:'); new Song(songName, singer);
        return new Song(songName, singer);
    }

    showAllSongs() {
        console.log('---Playlist---');
        let playlist = this.songManagement.getAll();
        for (let i = 0; i < playlist.length; i++) {
            console.log(`${i + 1},${playlist[i].nameSong},${playlist[i].singer}`)
        }
    }
    showAddSongToAlbumByUser(currentUser: User){
        console.log('---Add song to album---')
        let songs = this.songManagement.getAll();
        let albums = this.albumManagement.getAll();
        if (albums.length == 0) {
            console.log('There are currently no song!')

        }
        for (let i = 0; i < songs.length; i++) {
            console.log(`${i + 1},${songs[i].nameSong},${songs[i].singer}`);
        }
        let id = +rl.question('Enter the name of the song need put in the album:')
        let albumIndex = this.albumManagement.findById(id);
        if (albumIndex == -1) {
            console.log('Album code does not exist!');

        } else {
            let songName = rl.question('Enter the name of song need add:')
            let song = this.songManagement.findByName(songName);
            if (song != null) {
                albums[albumIndex].songs = songs;
                song.albums.push(albums[albumIndex]);
            } else {
                console.log('The name of the song does not exist!')

            }

        }

    }
}