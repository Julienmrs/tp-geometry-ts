import Envelope from "./Envelope";

export default interface Geometry{
    getType():string;
    isEmpty():Boolean;
    translate(dx:number,dy:number) : void;
    clone(): Geometry;
    getEnvelope() :Envelope
}