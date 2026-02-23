import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import { power } from "./power";

describe("math.power", () => {
	it("should raise a number to the power of another number", () => {
		// Arrange
		const base = faker.number.int(255);
		const exponent = faker.number.int(255);

		// Act
		const result = power(base, exponent);

		// Assert
		expect(result).toBe(base ** exponent);
	});
});
