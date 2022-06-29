import {IAlbumManagement} from "./i-album-management";
import {Album} from "../../music/album";

export class AlbumManagement implements IAlbumManagement{
    private static id: number =0;
    private static albums : Album[] = [];


    createNew(t: Album): void {
        AlbumManagement.id ++;
        t.id = AlbumManagement.id;
        AlbumManagement.albums.push(t);
    }

    findById(id: number): number {
    let index = -1;
    for (let i = 0; i < AlbumManagement.albums.length; i++){
        if(AlbumManagement.albums[i].id==id){
            index = i
        }
    }
    return index;

    }
    findByIdAlbum(id: number):Album|null{
        let index = this.findById(id);
        if(index!=-1){
            return AlbumManagement.albums[index]
        }
        return null;
    }
    
    getAll(): Album[] {
        return AlbumManagement.albums;
    }

    removeById(id: number): void {
        let indexRemove = this.findById(id);
        if (indexRemove != -1){
            AlbumManagement.albums.splice(indexRemove, 1);
        }else {
            console.log('No album info!')
        }
    }

    updateById(id: number, name: Album): void {
        let index = this.findById(id);
        if (index != -1){
            AlbumManagement.albums[index] = name;
        }
    }
    updateNameById(id: number, name: string): void {
        let index = this.findById(id);
        if (index != -1){
            AlbumManagement.albums[index].nameAlbum = name;
        }
    }
    findByName(name: string): Album | null {
        for (let i = 0; i < AlbumManagement.albums.length; i++) {
            if (AlbumManagement.albums[i].nameAlbum == name){
                return AlbumManagement.albums[i]
            }

        }
        return null;
    }


}