import type { Config } from "tailwindcss";

const config: Config = {
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
                project: {
                    green: {
                        100: "#50B2C0",
                        200: "#255D6A",
                        300: "#0A313C",
                    },
                    purple: {
                        100: "#8381D9",
                        200: "#2A2879",
                    },
                    gray: {
                        100: "#F8F9FC",
                        200: "#E6E8F2",
                        300: "#D1D6E4",
                        400: "#8D95AF",
                        500: "#303F73",
                        600: "#252D4A",
                        700: "#181C2A",
                        800: "#0E1116",
                    },
                    gradient: {
                        start: '#7FD1CC',
                        end: '#9694F5',
                    }
                },
            },
        },
    },
    plugins: [],
};
export default config;
