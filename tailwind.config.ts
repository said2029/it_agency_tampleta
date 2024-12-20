import { s } from "framer-motion/client";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primary_secandry: "var(--primary-secandry)",
        secandry: {
          DEFAULT: "rgb(var(--secandry)/<alpha-value>)",
        },
        secandry_primary: "var(--secandry-primary)",
        black: "var(--black)",
        black_75: "var(--black-75)",
        black_50: "var(--black-50)",
        black_25: "var(--black-25)",
        black_5: "var(--black-5)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        h1: [
          "80px",
          {
            fontWeight: 700,
            lineHeight: "110px",
          },
        ],
        h3_normal: "66px",
        h3: [
          "66px",
          {
            fontWeight: 700,
          },
        ],
        h4: [
          "49px",
          {
            fontWeight: 700,
            lineHeight: "49px",
          },
        ],
        h5: [
          "37px",
          {
            fontWeight: 700,
          },
        ],
        h6: [
          "27px",
          {
            fontWeight: 700,
            lineHeight: "28px",
          },
        ],
        h6_noraml: "27px",
        paragraph: "16px",
        paragraph_b: [
          "16px",
          {
            fontWeight: 700,
          },
        ],
        navItem: "21px",
      },
      backgroundImage: {
        primary_gradinet: "var(--primary-gradinet)",
        secandry_gradinet: "var(--secandry-gradinet)",
      },
      padding: {
        spacing: "80px",
        spacing_2: "188px",
        mobile: "16px",
        top: "120px",
      },
      margin: {
        top: "120px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
	  animation:{
		spin2: "spin 40s linear infinite",
	  },
      keyframes: {
        span2: {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
