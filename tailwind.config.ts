import type { Config } from 'tailwindcss';
export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { brand: { 50:'#eef4ff',100:'#d9e5ff',500:'#2f6bff',600:'#1f55e0',700:'#1a44b3' } },
    fontFamily: { sans: ['"Hind Siliguri"','Inter','system-ui','sans-serif'] },
    keyframes: { fadeUp: { '0%':{opacity:'0',transform:'translateY(8px)'},'100%':{opacity:'1',transform:'none'} } },
    animation: { fadeUp: 'fadeUp .3s ease-out' } } },
} satisfies Config;
