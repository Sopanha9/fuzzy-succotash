import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Shadcn UI components use empty interfaces intentionally (e.g. BadgeProps, InputProps)
      // so they can be extended by consumers — this is a valid pattern, not an error.
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];

export default eslintConfig;
