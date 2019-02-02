interface Collection<T> {
    push (item: T): number;
    get (index: number): T;
    getLength (): number;
}

export default Collection;
