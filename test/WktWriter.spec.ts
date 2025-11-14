import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import WktWriter from '../src/WktWriter';
import Geometry from '../src/Geometry';
import LineString from "../src/LineString";
import GeometryVisitor from "../src/GeometryVisitor";
import Envelope from "../src/Envelope";

describe("test WktWriter", () => {
    it("test default constructor", () => {
        const wkt = new WktWriter();
        var p = new Point()
        var l = new LineString()
        expect(wkt.write(p)).to.deep.equal("POINT");
        expect(wkt.write(l)).to.deep.equal("LINESTRING");

    });

    it("test construct point", () => {
        const wkt = new WktWriter();
        let p = new Point([2, 5])
        expect(wkt.write(p)).to.deep.equal("POINT(2 5)");

    });

    it("test construct linestring", () => {
        const wkt = new WktWriter();
        let p1 = new Point([0, 0])
        let p2 = new Point([1, 1])
        let p3 = new Point([5, 5])

        var l = new LineString([p1, p2, p3])
        expect(wkt.write(l)).to.deep.equal("LINESTRING(0 0,1 1,5 5)");

    });



})