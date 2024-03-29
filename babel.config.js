module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "nativewind/babel",
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ],
  ],
};
