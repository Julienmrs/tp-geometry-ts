import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter{

    write(geometry: Geometry):string
    {

        if ( geometry instanceof Point ){

            if (geometry.isEmpty()) {return geometry.getType().toUpperCase()}
            return `${geometry.getType()}(${geometry.getCoordinate()[0]} ${geometry.getCoordinate()[1]})`.toUpperCase()
        }
        
        else if ( geometry instanceof LineString ){
            if (geometry.isEmpty()) {return geometry.getType().toUpperCase()}
            else {
                let str_retour = geometry.getType().toUpperCase() +"("
                for (let i = 0; i < geometry.getNumPoints(); i++) {
                    let pointi = geometry.getPointN(i)
                str_retour += `${pointi.getCoordinate()[0]} ${pointi.getCoordinate()[1]}`.toUpperCase()
                if (i < geometry.getNumPoints()-1) {str_retour +=","}
            }
            str_retour += ")"
            return str_retour
        }}
        else{
            throw new TypeError("geometry type not supported");
        }
        }

}