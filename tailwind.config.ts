// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ajuste para seu projeto
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EBEDF0",     
        secondary: "#072137",   
        accent: "#F59E0B",      
        neutral: "#374151",     
        background: "#F3F4F6",  
        surface: "#FFFFFF",     
        success: "#10B981",     
        warning: "#FBBF24",     
        btn: "#3782FF",      
      },
    },
  },
  plugins: [],
};

export default config;
