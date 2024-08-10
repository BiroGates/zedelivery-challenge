import { IMultiPolygon } from "../interfaces";


type ICoordinates = IMultiPolygon['coordinates'];
 
export class MultiPolygon implements IMultiPolygon {
    public type: string = 'MultiPolygon';
    readonly coordinates: ICoordinates;

    constructor(coordinates: ICoordinates) {
        this.coordinates = coordinates;
    }

    getCoordinates(): ICoordinates {
        return this.coordinates;
    }
}
