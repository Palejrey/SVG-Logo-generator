const Shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('circle', () => {
        it('what it should do', () => {
            const shape = new Shapes();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
        });
    });

    describe('triangle', () => {
        it('what it should do', () => {
            const shape = new Shapes();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="40,220 250,200 145,0" style="fill:blue;"/>');
        });
    });

    describe('square', () => {
        it('what it should do', () => {
            const shape = new Shapes();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="100" y="50" rx="10" ry="10" width="100" height="100"  fill="blue " />');
        });
    });
});
