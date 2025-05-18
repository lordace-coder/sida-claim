/** @type {import('tailwindcss').Config} */
export const content = [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
    },
    extend: {
        colors: {
            sidrabg: '#0b0f19',
            piPurple: '#a855f7',
            piCyan: '#22d3ee',
            appGreen: '#14ffb9',
            appPurple: '#c084fc',
            appBlue: '#60a5fa',
            appLeaf: '#4ade80',
            appOrange: '#fb923c',
            appCyan: '#38bdf8',
            appYellow: '#facc15',
        },
        backgroundImage: {
            idcard: 'linear-gradient(135deg,#ff6600 0%,#ff003c 100%)',
            dot: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"4\" height=\"4\"><circle cx=\"1\" cy=\"1\" r=\"1\" fill=\"%23131820\" /></svg>')",
        },
    },
};
export const plugins = [];
