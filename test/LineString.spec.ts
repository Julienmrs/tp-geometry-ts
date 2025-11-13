import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from '../src/LineString';

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
         expect(l.getType()).to.equal("LineString");
        expect(l.getNumPoints()).to.equal(0);
        expect(l.isEmpty()).to.equal(true)

    });

    it("test constructor with coordinates", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([5.0,6.0]);
        const l = new LineString([p1,p2])
        
        expect(l.getPointN(0)).to.equal(p1);
        expect(l.getPointN(1)).to.equal(p2);
    });

        it("test constructor with 1 coordinate", () => {
        const p1 = new Point([3.0,4.0]);
        const l = new LineString([p1])
        
        expect(l.getPointN(0)).to.equal(undefined);
    });

    it("out of bounds", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([5.0,6.0]);
        const l = new LineString([p1,p2]) 
        expect(l.getPointN(40)).to.equal(undefined);
        
    })
});

