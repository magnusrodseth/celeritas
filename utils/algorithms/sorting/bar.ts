export default class Bar {
    private _isSorted: boolean = false;

    private _sorting: boolean = false;

    private _value: number = 0;

    constructor(value: number) {
        this._value = value;
    }

    // Getters and setters
    public get isSorted(): boolean {
        return this._isSorted;
    }
    public set isSorted(value: boolean) {
        this._isSorted = value;
    }

    public get sorting(): boolean {
        return this._sorting;
    }
    public set sorting(value: boolean) {
        this._sorting = value;
    }

    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }
}