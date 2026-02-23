import { stdin, stdout } from "node:process";
import * as readline from "node:readline/promises";
import { math } from "@kxphotographer/car-event-logger-domain";

const rl = readline.createInterface({ input: stdin, output: stdout });

const a = await (async () => {
	while (true) {
		const answer = await rl.question("Enter the first number: ");
		const number = Number(answer);
		if (Number.isNaN(number)) {
			console.error("Invalid number");
			continue;
		}

		return number;
	}
})();

const b = await (async () => {
	while (true) {
		const answer = await rl.question("Enter the first number: ");
		const number = Number(answer);
		if (Number.isNaN(number)) {
			console.error("Invalid number");
			continue;
		}

		return number;
	}
})();

console.log(`${a} + ${b} = ${math.add(a, b)}`);
console.log(`${a} * ${b} = ${math.multiply(a, b)}`);
console.log(`${a} ^ ${b} = ${math.power(a, b)}`);

console.log("");

console.log("Error will be thrown in 1 second...");
await new Promise((resolve) => setTimeout(resolve, 1000));

throw new Error("Throw test for checking source map option working");
