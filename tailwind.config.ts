import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "rgb(var(--primaty)/<alpha-value>)",
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
        h4: ["49px", { fontWeight: 700 }],
        h5: ["37px", { fontWeight: 700 }],
        h6: ["27px", { fontWeight: 700,lineHeight:"28px" }],
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
        mobile:"16px"
      },
    },
  },
  plugins: [],
} satisfies Config;
