export default interface Geometry{
    getType():string;
    isEmpty():Boolean;
    translate(dx:number,dy:number) : void;
}