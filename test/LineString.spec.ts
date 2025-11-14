import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from '../src/LineString';
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
        expect(l.getNumPoints()).to.equal(0);
        expect(l.isEmpty()).to.equal(true);
    });

    it("test constructor with coordinates", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([5.0, 6.0]);
        const l = new LineString([p1, p2])

        expect(l.getPointN(0)).to.equal(p1);
        expect(l.getPointN(1)).to.equal(p2);
        expect(l.isEmpty()).to.equal(false)
    });

    it("test constructor with 1 coordinate", () => {
        const p1 = new Point([3.0, 4.0]);
        const l = new LineString([p1])

        expect(l.getPointN(0)).to.equal(undefined);
    });

    it("test out of bounds", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([5.0, 6.0]);
        const l = new LineString([p1, p2])
        expect(l.getPointN(40)).to.equal(undefined);

    })

    it("test translate list empty", () => {

        const l = new LineString();
        l.translate(1, 2);
        l.isEmpty();

    })

    it("test translate list", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([5.0, 6.0]);
        const l = new LineString([p1, p2])
        l.translate(1, 2)
        expect(l.getPointN(0).getCoordinate()).to.deep.equal([4, 6]);
        expect(l.getPointN(1).getCoordinate()).to.deep.equal([6, 8.0]);

    })

    it("test clone empty list ", () => {
        const l = new LineString();
        const copy = l.clone();
        expect(l.isEmpty()).to.equal(true);
        expect(copy.isEmpty()).to.equal(true);
    })

    it("test clone list ", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([5.0, 6.0]);
        const l = new LineString([p1, p2])
        const copy = l.clone();
        expect(l.getNumPoints()).to.be.equal(copy.getNumPoints())
        copy.translate(1, 2)
        copy.getPointN(0).getCoordinate()
        expect(l.getPointN(0).getCoordinate()).to.be.deep.equal([3, 4])
    })

    it("test envelope line empty ", () => {
        const l = new LineString()
        const env = l.getEnvelope()
        expect(env.isEmpty()).to.be.true;
    })

    it("test envelope line", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([2.0, 6.0]);
        const l = new LineString([p1, p2])
        const env = l.getEnvelope()
        expect(env.isEmpty()).to.be.false;
        expect(env.toString()).to.equal("[2,4],[3,6]")

    })

    it("test visitor lineString empty", () => {
        const visitor = new LogGeometryVisitor();
        const geometry = new LineString()
        geometry.accept(visitor)
    })

    it("test visitor lineString", () => {
        const visitor = new LogGeometryVisitor();
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([5.0, 6.0]);
        const geometry = new LineString([p1, p2])
        geometry.accept(visitor)
    })

});

