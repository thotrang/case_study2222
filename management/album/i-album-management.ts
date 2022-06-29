import {IManagement} from "../i-management";
import {Album} from "../../music/album";

export interface IAlbumManagement extends IManagement<Album>{
    findByIdAlbum(id: number): Album | null;
}