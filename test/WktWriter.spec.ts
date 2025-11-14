import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import WktWriter from '../src/WktWriter';
import Geometry from '../src/Geometry';
import LineString from "../src/LineString";
import GeometryVisitor from "../src/GeometryVisitor";
import Envelope from "../src/Envelope";
import WktVisitor from '../src/WktVisitor';

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

    it("test WktVisitor point ", () => {
        const visitorp = new WktVisitor();
        const p1 = new Point();
        p1.accept(visitorp);
        const wktp = visitorp.getResult();
        expect(wktp).to.equal("POINT")

    })

    it("test WktVisitor point ", () => {
        const visitorp = new WktVisitor();
        const p1 = new Point([3.0, 4.0]);
        p1.accept(visitorp);
        const wktp = visitorp.getResult();
        expect(wktp).to.equal("POINT(3 4)")
        console.log(visitorp)


    })

    it("test WktVisitor line empty", () => {
        var l = new LineString();
        const visitorl = new WktVisitor();
        l.accept(visitorl);
        const wktl = visitorl.getResult();
        console.log(visitorl)
        expect(wktl).to.equal("LINESTRING")

    })
    it("test WktVisitor line ", () => {
        const visitorp = new WktVisitor();
        const visitorl = new WktVisitor();
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([5.0, 6.0]);
        var l = new LineString([p1, p2,]);

        l.accept(visitorl);
        const wktl = visitorl.getResult();
        console.log(visitorl)
        expect(wktl).to.equal("LINESTRING(3 4,5 6)")

    })

})