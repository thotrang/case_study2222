import {SongMenu} from "./song-menu";
import * as rl from 'readline-sync';
import {AlbumMenu} from "./album-menu";
import {User} from "../music/user";
import {UserManagement} from "../management/user/user-management";

export class UserMenu {
    private songMenu = new SongMenu();
    private albumMenu = new AlbumMenu();
    private userMenu = new UserManagement();


    run(currentUser: User) {
        let choice = -1;
        do {
            console.log('---User app---')
            console.log('1.Show album:')
            console.log('2.Create album:')
            console.log('3.Add song to album :')
            console.log('4.Delete song:')
            console.log('5.Find name song:')
            console.log('0.Log out')
            choice = +rl.question('Enter the choice:')
            switch (choice) {
                case 1: {
                    console.log('Show album')
                    this.albumMenu.showAlbumByUser(currentUser);
                    break;

                }
                case 2: {
                    console.log('Create album')
                    this.albumMenu.showCreateAlbum(currentUser);
                    break;
                }
                case 3: {
                    console.log('Add song to album')
                    this.songMenu.showAddSongToAlbumByUser(currentUser);
                    break;

                }
                case 4: {
                    console.log('Delete song')
                    this.songMenu.inputRemoveSong(currentUser);
                    break;

                }
                case 5: {
                    console.log('Find name song')
                    this.songMenu.findNameBySong(currentUser);
                    break;


                }
            }


        } while (choice != 0)
    }


}