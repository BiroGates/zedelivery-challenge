import AbstractPoint from "../abstract/point.absctract";
import { IPoint } from "../interfaces";




export class Point extends AbstractPoint {
    constructor(coordinates: IPoint['coordinates']) {
        super(coordinates);
    }

    getCoordinates(): IPoint['coordinates'] {
        return this.coordinates;
    }
};