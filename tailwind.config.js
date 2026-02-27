tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#f97316", // Modern Orange for high visibility and energy
                "primary-dark": "#c2410c",
                "background-light": "#f8fafc", // Slate 50
                "background-dark": "#0f172a", // Slate 900
                "surface-light": "#ffffff",
                "surface-dark": "#1e293b", // Slate 800
                "text-light": "#334155", // Slate 700
                "text-dark": "#cbd5e1", // Slate 300
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Oswald', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
};
