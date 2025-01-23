const myFunctions = require('./functions.js');

test('Test div - with integer over integer', () => {
    const target = 5;
    const result = myFunctions.div(10,2);
    expect(result).toBe(target);
});

test('Test div - with float over zero', () => {
    const target = Infinity;
    const result = myFunctions.div(2.975,0);
    expect(result).toBe(target);
});

test('Test div - with zero over float', () => {
    const target = 0;
    const result = myFunctions.div(0,2.975);
    expect(result).toBe(target);
});

test('Test div - with integer over float', () => {
    const target = 2;
    const result = myFunctions.div(5,2.5);
    expect(result).toBe(target);
});

test('Test div - with float over integer', () => {
    const target = 0.5;
    const result = myFunctions.div(2.5,5);
    expect(result).toBe(target);
});

test('Test div - with zero over zero', () => {
    const target = NaN;
    const result = myFunctions.div(0,0);
    expect(result).toBe(target);
});

test('Test div - with negative zero over zero', () => {
    const target = NaN;
    const result = myFunctions.div(-0,0);
    expect(result).toBe(target);
});

test('Test div - with positive integer over zero', () => {
    const target = Infinity;
    const result = myFunctions.div(1,0);
    expect(result).toBe(target);
});

test('Test div - with negative integer over zero', () => {
    const target = -Infinity;
    const result = myFunctions.div(-1,0);
    expect(result).toBe(target);
});

test('Test div - with zero over positive integer', () => {
    const target = 0;
    const result = myFunctions.div(0,1);
    expect(result).toBe(target);
});

test('Test div - with zero over negative integer', () => {
    const target = -0;
    const result = myFunctions.div(0,-1);
    expect(result).toBe(target);
});

test('Test div - with inifnity over zero', () => {
    const target = Infinity;
    const result = myFunctions.div(Infinity,0);
    expect(result).toBe(target);
});

test('Test div - with negative infinity over zero', () => {
    const target = -Infinity;
    const result = myFunctions.div(-Infinity,0);
    expect(result).toBe(target);
});

test('Test div - with zero over inifnity', () => {
    const target = 0;
    const result = myFunctions.div(0,Infinity);
    expect(result).toBe(target);
});

test('Test div - with zero over negative infinity', () => {
    const target = -0;
    const result = myFunctions.div(0,-Infinity);
    expect(result).toBe(target);
});

test('Test div - with integer over inifnity', () => {
    const target = 0;
    const result = myFunctions.div(1,Infinity);
    expect(result).toBe(target);
});

test('Test div - with negative integer over infinity', () => {
    const target = -0;
    const result = myFunctions.div(-1,Infinity);
    expect(result).toBe(target);
});

test('Test containsNumbers - with zero over zero', () => {
    const target = NaN;
    const result = myFunctions.div(0,0);
    expect(result).toBe(target);
});