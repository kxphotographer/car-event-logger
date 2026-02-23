import { multiply } from "./multiply";

/**
 * Raise a number to the power of another number
 * @param a - The base number
 * @param b - The exponent number
 * @returns The result of the exponentiation
 */
export const power = (a: number, b: number) =>
	Array.from({ length: b }, () => a).reduce(
		(acc, curr) => multiply(acc, curr),
		1,
	);
