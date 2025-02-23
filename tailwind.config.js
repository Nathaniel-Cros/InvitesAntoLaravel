import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.{js,ts,jsx,tsx}"',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                Arizona: ['Arizona', 'serif'],
                Alice: ['Alice', 'serif'],
                Carattere: ['Carattere', 'serif'],
                Dynalight: ['Dynalight', 'serif'],
                FleurDeLeah: ['Fleur De Leah', 'serif'],
                ImperialScript: ['Imperial Script', 'serif'],
                Romanesco: ['Romanesco', 'serif'],
                Cormorant: ['Cormorant', 'serif'],
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'spin-slow': 'spin 15s linear infinite',
                fade: 'fadeOut 3s ease-in-out',
            },
            keyframes: theme => ({
                fadeOut: {
                    '0%': { backgroundColor: theme(''), fontSize: '' },
                    '100%': { backgroundColor: theme('colors.transparent'), fontSize: 0 },
                },
            }),
        },
    },
    plugins: [],
};
