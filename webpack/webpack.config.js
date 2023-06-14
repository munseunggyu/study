const path = require("path");

module.exports = {
  entry: "./src/index.js", // 진입점
  output: {
    // 번들링된 파일의 위치
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

// 이후부터 npx webpack만 실행해도 가능
