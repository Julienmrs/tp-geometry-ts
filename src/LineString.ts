import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry{
  private points?: Array<Point>;
  constructor(points?: Array<Point>) {
    if (points) {
        
    if (points.length <= 1) this.points = []
    else this.points = points
     ;
  }}

getType() : string {
  return "LineString";
}

isEmpty(): Boolean {
    return this.getNumPoints() == 0;    
}

translate(dx: number, dy: number) {
  if (this.isEmpty()) return ; 
  else {
    for (let point of this.points){
      point.translate(dx,dy);
    }}
}

clone(): LineString {
  if (this.isEmpty()) return new LineString();
  else{
    var list = new Array<Point>
    for(let point of this.points){
      list.push(point.clone())
    }
    
    return new LineString(list)
  }
  
}

getNumPoints() :number {
return this.points ? this.points.length : 0 ;  
}

getPointN(n :number) : Point {
    return this.points[n]  ;
} 
}