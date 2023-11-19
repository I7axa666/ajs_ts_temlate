import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    delete(id: number): void {
        this._items.splice(0, this._items.length, ...this._items.filter(item => item.id !== id));
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    caulculateSumm(): number {
        return this._items.reduce((acc, item) => 
        item.price + acc, 0);
    }

    culculateDiscount(bonus: number): number {
        const totalSumm = this.caulculateSumm();
        return totalSumm - totalSumm * bonus / 100;
    }
}