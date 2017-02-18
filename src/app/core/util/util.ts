export function toInteger(value: any): number {
	return parseInt(`${value}`, 10);
}

export function toString(value: any): string {
	return (value !== undefined && value !== null) ? `${value}` : '';
}

export function getValueInRange(value: number, max: number, min = 0): number {
	return Math.max(Math.min(value, max), min);
}

export function isString(value: any): boolean {
	return typeof value === 'string';
}

export function isNumber(value: any): boolean {
	return !isNaN(toInteger(value));
}

export function isDefined(value: any): boolean {
	return value !== undefined && value !== null;
}

export function padNumber(value: number) {
	if (isNumber(value)) {
		return `0${value}`.slice(-2);
	} else {
		return '';
	}
}

export function regExpEscape(text) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
export function extendObject(dest: any, ...sources: any[]): any {
	if (dest == null) {
		throw TypeError('Cannot convert undefined or null to object');
	}

	for (let source of sources) {
		if (source != null) {
			for (let key in source) {
				if (source.hasOwnProperty(key)) {
					dest[key] = source[key];
				}
			}
		}
	}

	return dest;
}

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
	if (typeCache[<string>label]) {
		throw new Error(`Action type "${label}" is not unique"`);
	}

	typeCache[<string>label] = true;

	return <T>label;
}

export function throttle(func: any, wait: number, options?: any) {
	options = options || {};
	let context;
	let args;
	let result;
	let timeout = null;
	let previous = 0;

	function later() {
		previous = options.leading === false ? 0 : +new Date();
		timeout = null;
		result = func.apply(context, args);
	}

	return function() {
		const now = +new Date();

		if (!previous && options.leading === false) {
			previous = now;
		}

		const remaining = wait - (now - previous);
		context = this;
		args = arguments;

		if (remaining <= 0) {
			clearTimeout(timeout);
			timeout = null;
			previous = now;
			result = func.apply(context, args);
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}

		return result;
	};
}

/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
export function throttleable(duration: number, options?: any) {
	return function innerDecorator(target, key, descriptor) {
		return {
			configurable: true,
			enumerable: descriptor.enumerable,
			get: function getter() {
				Object.defineProperty(this, key, {
					configurable: true,
					enumerable: descriptor.enumerable,
					value: throttle(descriptor.value, duration, options)
				});

				return this[key];
			}
		};
	};
}
