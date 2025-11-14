import "mocha";
import { expect } from "chai";
import Envelope from '../src/Envelope';

describe("test Envelope", () => {
    it("test default constructor", () => {
        const env = new Envelope();
        expect(env.isEmpty()).to.equal(true)
        expect(Number.isNaN(env.getXmin())).to.be.true;
        expect(Number.isNaN(env.getYmin())).to.be.true;
        expect(Number.isNaN(env.getXmax())).to.be.true;
        expect(Number.isNaN(env.getYmax())).to.be.true;
    });

    it("test corners", () => {
        const env = new Envelope([0,0],[5,5]);
        expect(env.isEmpty()).to.equal(false)
        expect(env.getXmin()).to.deep.equal(0)
        expect(env.getYmin()).to.deep.equal(0)
        expect(env.getXmax()).to.deep.equal(5)
        expect(env.getYmax()).to.deep.equal(5)
        expect(env.toString()).to.deep.equal("[0,0],[5,5]")
    });


})