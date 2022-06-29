export interface IManagement<T> {
    getAll(): T[];

    createNew(t: T): void;

    updateById(id: number, name: T): void;

    removeById(id: number): void;

    findById(id: number): number;

    findByName(name : string): T | null;


}