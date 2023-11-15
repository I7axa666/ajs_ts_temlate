import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly yaer: number,
        readonly country: string,
        readonly tagline: string,
        readonly genres: string,
        readonly time: number,
    ) { }
}