import Envelope from "./Envelope";
import Coordinate from './Coordinate';

export default class EnvelopeBuilder {
    private xVals: number[] = [];
    private yVals: number[] = [];

    insert(coordinate: Coordinate) {
        if ((coordinate) && coordinate.length >=2){
        this.xVals.push(coordinate[0]);
        this.yVals.push(coordinate[1]);
        }
    }

    build(): Envelope {
        if (this.xVals.length < 1 || this.yVals.length < 1 || this.xVals[0]==undefined || this.yVals[0]==undefined) {
            return new Envelope();
        }

        const minX = Math.min(...this.xVals);
        const maxX = Math.max(...this.xVals);
        const minY = Math.min(...this.yVals);
        const maxY = Math.max(...this.yVals);

        return new Envelope([minX, minY], [maxX, maxY]);
    }
}

