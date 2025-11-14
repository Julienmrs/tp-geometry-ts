import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry"

export default class Point implements Geometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    if (coordinate) {
      if (coordinate.length == 2){
        this.coordinate = coordinate ;
      }
    } else this.coordinate = []
    
  }

  getType() : string {
  return "Point"
}
  isEmpty(): Boolean {
      return this.coordinate.length == 0;
  }

  translate(dx: number, dy: number) {
    if (this.isEmpty()){
      return 
    }
    this.coordinate[0] +=  dx ;
    this.coordinate[1] += dy;
  }

  clone(): Point {
    if (this.isEmpty()) return new Point();
    const p = new Point([this.x(),this.y()])
    return p
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  getEnvelope(): Envelope {
    const envb= new EnvelopeBuilder()
    envb.insert(this.getCoordinate())
    const env = envb.build()
    return env
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate.length > 1  ? this.coordinate[1] : Number.NaN ;
  }

}
