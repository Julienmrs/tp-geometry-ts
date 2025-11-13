import Coordinate from "./Coordinate";

export default class  Envelope{
    private bottomleft?: Coordinate;
    private topright?: Coordinate;


    constructor(bottomleft?: Coordinate,topright?: Coordinate){
        this.bottomleft = bottomleft;
        this.topright = topright;
    }

    isEmpty():Boolean{
        return (this.bottomleft == undefined || this.topright == undefined)
    }

    getXmin():number{return this.isEmpty() ? Number.NaN : this.bottomleft[0]}
    getXmax():number{return this.isEmpty() ? Number.NaN : this.topright[0]}
    getYmin():number{return this.isEmpty() ? Number.NaN : this.bottomleft[1]}
    getYmax():number{return this.isEmpty() ? Number.NaN : this.topright[1]}
    toString():string{
        return this.isEmpty()? "" : 
        "["+this.bottomleft.toString() +"],["+this.topright.toString()+"]";
    }
}

