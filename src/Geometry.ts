
import Envelope from './Envelope';
import GeometryVisitor from './GeometryVisitor';

export default interface Geometry{
    getType():string;
    isEmpty():Boolean;
    translate(dx:number,dy:number) : void;
    clone(): Geometry;
    getEnvelope() :Envelope;
    accept(visitor :GeometryVisitor ): void;
}