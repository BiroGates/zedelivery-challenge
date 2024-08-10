import { MultiPolygon } from "../value-object/GeoArea/entity/multipolygon.entity";

class Partner {
    private id: string;

    private tradingName: string;

    private ownerName: string;

    // This should be a value-object as well.
    private document: string;

    private coverageArea: MultiPolygon;

    
};