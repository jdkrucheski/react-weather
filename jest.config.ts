export default {
  testEnvironment: "jest-environment-jsdom",
  serupFile: ["./jest.setup.ts"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
};
