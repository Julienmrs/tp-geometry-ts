import "mocha";
import { expect } from "chai";
import Envelope from '../src/Envelope';
import EnvelopeBuilder from '../src/EnvelopeBuilder';

describe("test Envelope Builder", () => {
    it("test default constructor ", () => {
        const envb= new EnvelopeBuilder()
        const env = envb.build()
        expect(env.isEmpty()).to.equal(true)
        expect(Number.isNaN(env.getXmin())).to.be.true;
        expect(Number.isNaN(env.getYmin())).to.be.true;
        expect(Number.isNaN(env.getXmax())).to.be.true;
        expect(Number.isNaN(env.getYmax())).to.be.true;
    })


    it("test insert", () => {
        const envb= new EnvelopeBuilder()
        envb.insert([1,2])
        const env = envb.build()
        
        expect(env.getXmin()).to.deep.equal(1)
        expect(env.getYmin()).to.deep.equal(2)
        expect(env.getXmax()).to.deep.equal(1)
        expect(env.getYmax()).to.deep.equal(2)
        expect(env.toString()).to.deep.equal("[1,2],[1,2]")
    });

})