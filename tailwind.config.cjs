/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.astro"],
    darkMode: "class",
    theme: {
      screens: {
        'sm': '569px',
        'md': '864px',
        'lg': '968px',
        'xl': '1283px',
        '2xl': '1555px',
        '3xl': '1827px',
        '4xl': '2099px',
        '5xl': '2371px',
      },
      extend: {
        fontFamily: {
          body: ["Open Sans", "sans-serif"],
          heading: ["Open Sans", "sans-serif"],
        },
        colors: {
          transparent: "transparent",
          current: "currentColor",
          primary: {
            main: "rgb(var(--color-primary-main) / <alpha-value>)",
          },
          text: {
            body: "rgb(var(--color-text-body) / <alpha-value>)",
            bold: "rgb(var(--color-text-bold) / <alpha-value>)",
            heading: "rgb(var(--color-text-heading) / <alpha-value>)",
            muted: "rgb(var(--color-text-muted) / <alpha-value>)",
            code: "rgb(var(--color-text-code) / <alpha-value>)",
            link: "rgb(var(--color-text-link) / <alpha-value>)",
            selection: "rgb(var(--color-text-selection) / <alpha-value>)",
          },
          bg: {
            body: "rgb(var(--color-bg-body) / <alpha-value>)",
            code: "rgb(var(--color-bg-code) / <alpha-value>)",
            selection: "rgb(var(--color-bg-selection) / <alpha-value>)",
          },
          border: {
            code: "rgb(var(--color-border-code) / <alpha-value>)",
          },
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              a: {
                "&:hover": {
                  color: "rgb(var(--color-text-link))",
                },
              },
              "h1, h2, h3, h4, h5": {
                color: "rgb(var(--color-text-heading))",
              },
              "code::before": {
                content: "none",
              },
              "code::after": {
                content: "none",
              },
              blockquote: {
                border: "none",
                position: "relative",
                width: "96%",
                margin: "0 auto",
                "font-size": "1.0625em",
                "padding-top": "1.5rem",
                "padding-bottom": "0.5rem",
                "padding-left": "1.5rem",
                "padding-right": "1.5rem",
              },
              "blockquote::before": {
                "font-family": "Arial",
                content: "'“'",
                "font-size": "4em",
                color: "rgb(var(--color-text-link))",
                position: "absolute",
                left: "-10px",
                top: "-10px",
              },
              "blockquote::after": {
                content: "",
              },
              "blockquote p:first-of-type::before": {
                content: "",
              },
              "blockquote p:last-of-type::after": {
                content: "",
              },
              pre: {
                backgroundColor: "rgb(var(--color-bg-code))",
                padding: "0",
                borderRadius: "0.5rem",
                margin: "1rem 0",
              },
              "pre code": {
                backgroundColor: "transparent",
                borderWidth: "0",
                borderRadius: "0",
                padding: "0",
                fontWeight: "400",
                color: "inherit",
                fontSize: "inherit",
                fontFamily: "inherit",
                lineHeight: "inherit",
              },
              "code::before": {
                content: "none",
              },
              "code::after": {
                content: "none",
              },
            },
          },
          sleek: {
            css: {
              "--tw-prose-body": "rgb(var(--color-text-body))",
              "--tw-prose-headings": "rgb(var(--color-text-heading))",
              "--tw-prose-lead": "rgb(var(--color-text-body))",
              "--tw-prose-links": "rgb(var(--color-text-body))",
              "--tw-prose-bold": "rgb(var(--color-text-bold))",
              "--tw-prose-counters": "rgb(var(--color-text-body))",
              "--tw-prose-bullets": "rgb(var(--color-text-body))",
              "--tw-prose-hr": "rgb(var(--color-text-muted))",
              "--tw-prose-quotes": "rgb(var(--color-text-body))",
              "--tw-prose-quote-borders": "rgb(var(--color-primary-main))",
              "--tw-prose-captions": "rgb(var(--color-primary-heading))",
              "--tw-prose-quote-captions": "rgb(var(--color-primary-heading))",
              "--tw-prose-pre-bg": "rgb(var(--color-bg-code))",
              "--tw-prose-th-borders": "rgb(var(--color-text-muted))",
              "--tw-prose-td-borders": "rgb(var(--color-text-muted))",
            },
          },
        }),
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require('tailwind-scrollbar')({ nocompatible: true }),
    ],
  };
  