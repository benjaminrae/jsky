import typescript from "@rollup/plugin-typescript";
import multiInput from "rollup-plugin-multi-input";

const config = [
  {
    input: "src/cli/index.ts",
    output: {
      file: "dist/cli/index.js",
      format: "esm",
    },
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: ["src/hooks/*.ts"],
    output: {
      dir: "dist/commonjs/hooks",
      format: "cjs",
    },
    plugins: [
      multiInput.default(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: ["src/hooks/*.ts"],
    output: {
      dir: "dist/esm/hooks",
      format: "esm",
    },
    plugins: [
      multiInput.default(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];

export default config;
