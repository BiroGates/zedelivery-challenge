import { IMultiPolygon } from "../interfaces";
import { GeoJsonTypes } from "../interfaces";

type ICoordinates = IMultiPolygon['coordinates'];

export default abstract class AbstractMultiPolygon implements IMultiPolygon{
    readonly type: string;

    readonly coordinates: ICoordinates;

    constructor(coordinates: ICoordinates) {
        this.type = GeoJsonTypes.MULTIPOLYGON;
        this.coordinates = coordinates;
    }

    abstract getCoordinates(): ICoordinates;
}