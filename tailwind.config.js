module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      head: ["Inconsolata", "monospace"],
      body: ["Space Mono", "monospace"],
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3.5rem",
        13: "5rem",
        14: "6rem",
      },
    },
  },
  plugins: [],
};
