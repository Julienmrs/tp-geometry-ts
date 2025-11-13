import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

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

});

