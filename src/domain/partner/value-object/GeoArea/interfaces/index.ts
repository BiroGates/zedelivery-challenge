import { NestedArray } from "../../../../../@shared/types";



export interface IPoint {
    readonly type: string;
    readonly coordinates: [number, number];
};


export interface IMultiPolygon {
    readonly type: string;
    readonly coordinates: NestedArray<number>;
};

export enum GeoJsonTypes {
    POINT = 'Point',
    MULTIPOLYGON = 'MultiPolygon',
}