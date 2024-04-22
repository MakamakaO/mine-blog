const require = createRequire(import.meta.url);
import { createRequire } from 'module'; // at top of your file
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx} "
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}