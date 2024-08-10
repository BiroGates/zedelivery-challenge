import { IPoint } from "../interfaces";

type ICoordinates = IPoint['coordinates'];


export class Point implements IPoint {
    public type: string = 'MultiPolygon';
    readonly coordinates: ICoordinates;

    constructor(coordinates: ICoordinates) {
        this.coordinates = coordinates;
    }

    getCoordinates(): ICoordinates {
        return this.coordinates;
    }
};