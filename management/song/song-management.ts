import {ISongManagement} from "./i-song-management";
import {Song} from "../../music/song";
export class SongManagement implements ISongManagement{
    private static id: number = 0;
    private static songs : Song[] =[];

    createNew(t: Song): void {
        SongManagement.id ++;
        t.id = SongManagement.id;
        SongManagement.songs.push(t);
    }

    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < SongManagement.songs.length; i++) {
            if (SongManagement.songs[i].id == id){
                index = i
            }
        }
        return index;
    }

    findByIdSong(id: number):Song|null{
        let index = this.findById(id);
        if(index!=-1){
            return SongManagement.songs[index]
        }
        return null;
    }
    
    getAll(): Song[] {
        return SongManagement.songs;
    }

    removeById(id: number): void {
        let index = this.findById(id);
        // console.log(index)
        if (index != -1){
            SongManagement.songs.splice(index, 1);
        }else {
            console.log('No song info!')
        }
    }

    updateById(id: number, t: Song): void {
        let index = this.findById(id);
        if (index != -1){
            SongManagement.songs[index] = t;
        }
    }

    findByName(name: string): Song | null {
        for (let i = 0; i < SongManagement.songs.length; i++) {
            if (SongManagement.songs[i].nameSong == name){
                return SongManagement.songs[i]
            }
        }
        return null;
    }
}

