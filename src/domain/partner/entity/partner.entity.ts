import { v4 as uuid } from 'uuid';
import { Point } from "../value-object/GeoArea/entity/point.entity";
import { MultiPolygon } from "../value-object/GeoArea/entity/multipolygon.entity";


export default class Partner {
    public id = uuid();

    public tradingName: string;

    public ownerName: string;

    private document: string;   // TODO: This should be a value-object as well.

    private coverageArea: MultiPolygon;

    private address: Point

    constructor(tradingName: string, ownerName: string, document: string, coverageArea: MultiPolygon, address: Point) {
        this.tradingName = tradingName;
        this.ownerName = ownerName;
        this.document = document;
        this.coverageArea = coverageArea;
        this.address = address;
    }

    getDocument(): string {
        return this.document;
    }

    getCoverageArea() {
        return this.coverageArea;
    }

    getAddress() {
        return this.address;
    }
};


// const x = new Partner('Test', 'test', 'test', new MultiPolygon([20, 20]), new Point([20, 20]));