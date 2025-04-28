import type { Config } from "tailwindcss";


// Étendre le type Config pour inclure daisyui
interface CustomConfig extends Config {
  daisyui?: {
    themes?: string[];
  };
}

const config: CustomConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui')
   
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

export default config;
