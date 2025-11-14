import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor {
    private buffer?: string = ""

    visitPoint(point: Point) {
        if (point.isEmpty()) { this.buffer = point.getType().toUpperCase() }
        else{
        console.log(point)
        console.log(point.getCoordinate().length )
        this.buffer = `${point.getType()}(${point.getCoordinate()[0]} ${point.getCoordinate()[1]})`.toUpperCase()
    }}
    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) { this.buffer = lineString.getType().toUpperCase() }
        else {
            let str_retour = lineString.getType().toUpperCase() + "("
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                let pointi = lineString.getPointN(i)
                str_retour += `${pointi.getCoordinate()[0]} ${pointi.getCoordinate()[1]}`.toUpperCase()
                if (i < lineString.getNumPoints() - 1) { str_retour += "," }
            }
            str_retour += ")";
            this.buffer = str_retour;
        }
    }


    getResult(): string {

        return this.buffer
    }
}