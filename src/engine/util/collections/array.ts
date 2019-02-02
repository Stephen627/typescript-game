import Collection from './collection';

class ArrayCollection<T> implements Collection<T> {
    private data: Array<T> = [];

    public constructor (data: Array<T> = []) {
        this.data = data;
    }

    public push (item: T): number {
        return this.data.push(item);
    }

    public get (index: number): T {
        return this.data[index];
    }

    public getLength (): number {
        return this.data.length;
    }
}

export default ArrayCollection;
