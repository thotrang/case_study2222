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
exports.CategoryMenu = void 0;
const category_management_1 = require("../management/category/category-management");
const rl = __importStar(require("readline-sync"));
const category_1 = require("../music/category");
var CategoryChoice;
(function (CategoryChoice) {
    CategoryChoice[CategoryChoice["SHOW_ALL_LIST_SONG"] = 1] = "SHOW_ALL_LIST_SONG";
    CategoryChoice[CategoryChoice["CREATE_NEW_LIST_SONG"] = 2] = "CREATE_NEW_LIST_SONG";
    CategoryChoice[CategoryChoice["SHOW_SONG_BY_SONGTITLE"] = 3] = "SHOW_SONG_BY_SONGTITLE";
})(CategoryChoice || (CategoryChoice = {}));
class CategoryMenu {
    constructor() {
        this.categoryManagement = new category_management_1.CategoryManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log('---Quan ly danh muc---');
            console.log('1.Hien thi danh sach danh muc:');
            console.log('2.Tao danh muc moi :');
            console.log('3.Cap nhat thong tin danh muc:');
            console.log('4.Xoa danh muc');
            console.log('5.Hien thi danh sach san pham theo danh muc: ');
            console.log('0.Quay lai');
            choice = +rl.question('Nhap lua chon cua ban: ');
        } while (choice != 0);
        switch (choice) {
            case 1: {
                console.log('---Hien thi danh sach danh muc san pham---');
                let categories = this.categoryManagement.getAll();
                for (let category of categories) {
                    console.log(`${category.id},${category.name}`);
                }
                break;
            }
            case 2: {
                console.log('---Them danh muc moi---');
                let name = rl.question('Nhap ten danh muc');
                let category = new category_1.Category(name);
                this.categoryManagement.createNew(category);
                break;
            }
            case 5: {
                console.log('---Hien thi danh sach san pham---');
                let name = rl.question('Nhap ten danh muc can tim:');
                let category = this.categoryManagement.findByName(name);
                if (category) {
                    for (let i = 0; i < category.albums.length; i++) {
                        let albums = category;
                        console.log(`${i + 1}, ${category.albums[i].song}, ${category.albums[i].singer}`);
                    }
                }
                else {
                    console.log('ten danh muc san pham khong co');
                }
            }
        }
    }
}
exports.CategoryMenu = CategoryMenu;
