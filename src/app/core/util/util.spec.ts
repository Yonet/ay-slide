import { toInteger, toString, getValueInRange, isString, extendObject } from './util';

describe('util', () => {

	describe('toInteger', () => {

		it('should be noop for integers', () => {
			expect(toInteger(0)).toBe(0);
			expect(toInteger(10)).toBe(10);
		});

		it('should act as Math.floor for numbers', () => {
			expect(toInteger(0.1)).toBe(0);
			expect(toInteger(0.9)).toBe(0);
		});

		it('should parse strings', () => {
			expect(toInteger('0')).toBe(0);
			expect(toInteger('10')).toBe(10);
			expect(toInteger('10.1')).toBe(10);
			expect(toInteger('10.9')).toBe(10);
		});

	});

	describe('toString', () => {

		it('should be noop for strings', () => { expect(toString('foo')).toBe('foo'); });

		it('should return empty string for undefined values', () => {
			expect(toString(null)).toBe('');
			expect(toString(undefined)).toBe('');
		});

		it('should stringify non-string values', () => {
			expect(toString(10)).toBe('10');
			expect(toString(false)).toBe('false');
		});

	});

	describe('getValueInRange', () => {

		it('should be noop for numbers in range', () => { expect(getValueInRange(5, 10, 0)).toBe(5); });

		it('should do corrections in range', () => {
			expect(getValueInRange(11, 10, 0)).toBe(10);
			expect(getValueInRange(-1, 10, 0)).toBe(0);
		});

		it('should take 0 as a default min bound', () => {
			expect(getValueInRange(11, 10)).toBe(10);
			expect(getValueInRange(-1, 10)).toBe(0);
		});

	});

	describe('isString', () => {

		it('should recognize strings', () => {
			expect(isString('string')).toBeTruthy();
			expect(isString('')).toBeTruthy();
		});

		it('should recognize non-strings', () => {
			expect(isString(null)).toBeFalsy();
			expect(isString(2048)).toBeFalsy();
			expect(isString([])).toBeFalsy();
			expect(isString(undefined)).toBeFalsy();
		});

	});

	describe('extendObject', () => {
		it('should extend an object', () => {
			const extended = extendObject({}, { x: 123 });

			expect(extended).toEqual({ x: 123 });
		});

		it('should overwrite existing properties', () => {
			const extended = extendObject({ x: 456 }, { x: 123 });

			expect(extended).toEqual({ x: 123 });
		});

		it('should add additional properties', () => {
			const extended = extendObject({ x: 456 }, { y: 123 });

			expect(extended).toEqual({ x: 456, y: 123 });
		});

		it('should extend from multiple sources', () => {
			const extended = extendObject({}, { x: 123 }, { y: 456 });

			expect(extended).toEqual({ x: 123, y: 456 });
		});

		it('should overwrite properties from the later source', () => {
			const extended = extendObject({}, { x: 123 }, { x: 456 });

			expect(extended).toEqual({ x: 456 });
		});

		it('should treat null and undefined sources as empty objects', () => {
			const extended = extendObject({}, null, { x: 123 }, undefined, { y: 456 });

			expect(extended).toEqual({ x: 123, y: 456 });
		});

		it('should throw an error when the dest object is null', () => {
			expect(() => extendObject(null, { x: 123 }))
				.toThrowError('Cannot convert undefined or null to object');
		});

		it('should throw an error when the dest object is undefined', () => {
			expect(() => extendObject(undefined, { x: 123 }))
				.toThrowError('Cannot convert undefined or null to object');
		});
	});

});
