import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import { multiply } from "./multiply";

describe("math.multiply", () => {
	it("should multiply two numbers", () => {
		// Arrange
		const num1 = faker.number.int(65535);
		const num2 = faker.number.int(65535);

		// Act
		const result = multiply(num1, num2);

		// Assert
		expect(result).toBe(num1 * num2);
	});
});
