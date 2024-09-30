module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],  // Tailwind applies to all files in src
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',     // Dark gray/black for primary text or UI elements
        secondary: '#4B5563',   // Gray for secondary UI elements
        background: '#F9FAFB',  // Light gray for background
        textPrimary: '#111827', // Dark gray for main text
        textSecondary: '#6B7280', // Muted gray for secondary text
        buttonPrimary: '#2563EB', // Blue for primary buttons
        buttonHover: '#1D4ED8',  // Darker blue for button hover state
      },
      fontFamily: {
        sans: ['GeistVF', 'sans-serif'],  // Custom font for sans-serif
        mono: ['GeistMonoVF', 'monospace'],  // Custom font for monospace
      },
      spacing: {
        '72': '18rem',    // Large spacing utilities
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',   // Additional spacing for extra-large designs
        '160': '40rem',
      },
      screens: {
        sm: '640px',      // Small screens
        md: '768px',      // Medium screens (tablets)
        lg: '1024px',     // Large screens (desktops)
        xl: '1280px',     // Extra-large screens
        '2xl': '1440px',  // Large desktops
        '4k': '2560px',   // Ultra-large screens (4K displays)
      },
      maxWidth: {
        'screen-2xl': '1440px',  // Limits content width on larger screens
        'screen-4k': '2560px',
      },
    },
  },
  plugins: [],
};
