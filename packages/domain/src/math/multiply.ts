import { add } from "./add";

/**
 * Multiply two numbers
 * @param a - The first number
 * @param b - The second number
 * @returns The product of the two numbers
 */
export const multiply = (a: number, b: number) =>
	Array.from({ length: b }, () => a).reduce((acc, curr) => add(acc, curr), 0);
