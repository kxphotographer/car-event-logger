import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import { add } from "./add";

describe("math.add", () => {
	it("should add two numbers", () => {
		// Arrange
		const num1 = faker.number.int(65535);
		const num2 = faker.number.int(65535);

		// Act
		const result = add(num1, num2);

		// Assert
		expect(result).toBe(num1 + num2);
	});
});
