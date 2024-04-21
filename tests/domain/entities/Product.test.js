import Product from "../../../src/domain/entities/Product";

describe('Domain Product tests', () => {
    describe('When valid value is passed', () => {
        test('it should create an valid product', () => {
            const product = new Product(1, 'ball', 'topper', 200);
            expect(product.id).toEqual(1);
            expect(product.name).toEqual('ball');
            expect(product.brand).toEqual('topper');
            expect(product.price).toEqual(200);
        });
    });

    describe('When an invalid name is passed in constructor', () => {
        test('it should throw an error', () => {
            expect(() => {
                new Product(1, '', 'topper', 200);
            }).toThrow('invalid name');
        });
    });

    describe('When an invalid brand is passed in constructor', () => {
        test('it should throw an error', () => {
            expect(() => {
                new Product(1, 'ball', '', 200);
            }).toThrow('invalid brand');
        });
    });

    describe('When an invalid price 0 is passed in constructor', () => {
        test('it should throw an error', () => {
            expect(() => {
                new Product(1, 'ball', 'topper', 0);
            }).toThrow('invalid price');
        });
    });

    describe('When an negative price is passed in constructor', () => {
        test('it should throw an error', () => {
            expect(() => {
                new Product(1, 'ball', 'topper', -1);
            }).toThrow('invalid price');
        });
    });

    describe('When an NaN price is passed in constructor', () => {
        test('it should throw an error', () => {
            expect(() => {
                new Product(1, 'ball', 'topper', 'not number');
            }).toThrow('invalid price');
        });
    });
});