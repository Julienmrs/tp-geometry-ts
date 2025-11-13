import Envelope from "./Envelope";
import Coordinate from './Coordinate';

export default class  EnvelopeBuilder{
    private xVals ?: number[] ;
    private yVals ?: number[];

    insert(coordinate :Coordinate){
        if (coordinate.length > 0 ) 
        this.xVals.push(coordinate[0])
        this.yVals.push(coordinate[1])
    }

    build() : Envelope{
        const minX = Math.min(...this.xVals);
        const maxX = Math.max(...this.xVals);
        const minY = Math.min(...this.yVals);
        const maxY = Math.max(...this.yVals);
        
        if (!isFinite(minX) || !isFinite(minY) ) return new Envelope();
        else{
            return new Envelope([minX,minY],[maxX,maxY])
        }
    }
    
}