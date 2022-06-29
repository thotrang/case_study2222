import * as rl from 'readline-sync';
import {AlbumMenu} from "./album-menu";
import {SongMenu} from "./song-menu";
import {UserMenu} from "./user-menu";
import {User} from "../music/user";
enum AdminChoice{
    ALBUM_MANAGEMENT = 1,
    SONG_MANAGEMENT = 2,
    USER_MANAGEMENT = 3,
}
export class AdminMenu {
    private albumMenu = new AlbumMenu();
    private songMenu = new SongMenu();
    private userMenu = new UserMenu();

    run(currentUser: User) {
        let choice = -1;

        do {
            console.log('---Album management app---')
            console.log('1.Album management:')
            console.log('2.Song management')
            console.log('3.User management:')
            console.log('0.Log out')
            choice = +rl.question('Enter the choice:')
            switch (choice){
                case AdminChoice.ALBUM_MANAGEMENT: {
                    this.albumMenu.run(currentUser)

                    break;
                }
                case AdminChoice.SONG_MANAGEMENT:{
                    this.songMenu.run(currentUser)
                    break;
                }

                case AdminChoice.USER_MANAGEMENT:{
                    this.userMenu.run(currentUser)
                    break;
                }

            }
        } while (choice != 0)


    }
}