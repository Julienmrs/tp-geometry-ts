import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LogGeometryVisitor from '../src/LogGeometryVisitor';
import Geometry from '../src/Geometry';


describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.equal(true)
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.equal(false)
    });

    it("test translate empty point", () => {
        const p = new Point();
        p.translate(1,2)
        expect(p.isEmpty());
    })

    it("test translate point with coordinates", () => {
        const p = new Point([3.0,4.0]);
        p.translate(1,2);
        expect(p.getCoordinate()).to.deep.equal([4,6]);
    })

    it("test clone empty point ", () => {
        const p = new Point();
        const copy = p.clone();
        copy.translate(10.0,10.0);
        expect(p.isEmpty()).to.equal(true);
        expect(copy.isEmpty()).to.equal(true);
    })

    it("test clone point ", () => {
        const p = new Point([3.0,4.0]);
        const copy = p.clone();
        copy.translate(10.0,10.0);
        expect(copy.getCoordinate()).to.deep.equal([13,14]);
        expect(p.getCoordinate()).to.deep.equal([3,4]);
    })

    it("test envelope point empty ", () => {
        const p = new Point();
        const env = p.getEnvelope()
        expect(env.isEmpty()).to.be.true;
    })

    it("test envelope point", () => {
        const p = new Point([3.0,4.0]);
        const env = p.getEnvelope()
        expect(env.isEmpty()).to.be.false;
        expect(env.toString()).to.equal("[3,4],[3,4]")

        
    })

    it("test visitor point empty",() => {
        const visitor = new LogGeometryVisitor();
        const geometry = new Point()
        geometry.accept(visitor)
    })

    it("test visitor point",() => {
        const visitor = new LogGeometryVisitor();
        const geometry = new Point([3.0,4.0]);

        geometry.accept(visitor)
    })

});

