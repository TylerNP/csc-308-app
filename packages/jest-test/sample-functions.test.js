const myFunctions = require('./functions.js');

test('Test div - with 10 / 2', () => {
    const target = 5;
    const result = myFunctions.div(10,2);
    expect(result).toBe(target);
});

test('Test div - 2.975 / 0', () => {
    const target = Infinity;
    const result = myFunctions.div(2.975,0);
    expect(result).toBe(target);
});

test('Test div - 0 / 2.975', () => {
    const target = 0;
    const result = myFunctions.div(0,2.975);
    expect(result).toBe(target);
});

test('Test div - with 10 / 3', () => {
    const target = 3.33;
    const result = myFunctions.div(10,3);
    expect(result).toBeCloseTo(target);
});

test('Test div - with 3 / 10', () => {
    const target = 0.3;
    const result = myFunctions.div(3,10);
    expect(result).toBeCloseTo(target);
});

test('Test div - with 0 / 0', () => {
    const target = NaN;
    const result = myFunctions.div(0,0);
    expect(result).toBe(target);
});

test('Test div - with -0 / 0', () => {
    const target = NaN;
    const result = myFunctions.div(-0,0);
    expect(result).toBe(target);
});

test('Test div - with 1 / 0', () => {
    const target = Infinity;
    const result = myFunctions.div(1,0);
    expect(result).toBe(target);
});

test('Test div - with -1 / 0', () => {
    const target = -Infinity;
    const result = myFunctions.div(-1,0);
    expect(result).toBe(target);
});

test('Test div - with 0 / 1', () => {
    const target = 0;
    const result = myFunctions.div(0,1);
    expect(result).toBe(target);
});

test('Test div - with 0 / -1', () => {
    const target = -0;
    const result = myFunctions.div(0,-1);
    expect(result).toBe(target);
});

test('Test div - with Infinity / 0', () => {
    const target = Infinity;
    const result = myFunctions.div(Infinity,0);
    expect(result).toBe(target);
});

test('Test div - with -Infinity / 0', () => {
    const target = -Infinity;
    const result = myFunctions.div(-Infinity,0);
    expect(result).toBe(target);
});

test('Test div - with 0 / Inifnity', () => {
    const target = 0;
    const result = myFunctions.div(0,Infinity);
    expect(result).toBe(target);
});

test('Test div - with 0 / -Infinity', () => {
    const target = -0;
    const result = myFunctions.div(0,-Infinity);
    expect(result).toBe(target);
});

test('Test div - with 1 / Inifnity', () => {
    const target = 0;
    const result = myFunctions.div(1,Infinity);
    expect(result).toBe(target);
});

test('Test div - with -1 / Infinity', () => {
    const target = -0;
    const result = myFunctions.div(-1,Infinity);
    expect(result).toBe(target);
});
