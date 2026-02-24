import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["cjs", "esm"],
	sourcemap: true,
	target: "esnext",
	tsconfig: "tsconfig.build.json",
});
