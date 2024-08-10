import { IPoint } from "../interfaces";


type ICoordinates = IPoint['coordinates'];


export default abstract class AbstractPoint implements IPoint {
    readonly type: string;

    readonly coordinates: ICoordinates;

    constructor(coordinates: ICoordinates) {
        this.type = 'Point';
        this.coordinates = coordinates;
    }

    abstract getCoordinates(): ICoordinates;
}