import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    safelist: [
        // Clases que se usan dinámicamente y Tailwind podría no detectar
    ],
    theme: {
        extend: {
            colors: {
                // Colores de gradiente principales
                'gradient-start': '#5C02E4',
                'gradient-end': '#3C01BE',

                // Colores adicionales para mantener consistencia
                'primary-purple': '#7305FF',
                'secondary-purple': '#3C00BD',

                // Otros colores útiles
                'preuai-green': '#0DFF00',
                'preuai-correct-green': '#08C23C',
                'preuai-red': '#FF0000',
                'preuai-purple': '#A400F6',
            }
        },
    },
    plugins: [],
}
