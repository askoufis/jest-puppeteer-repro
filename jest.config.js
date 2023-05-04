/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-puppeteer",
  snapshotSerializers: ["<rootDir>/src/customSnapshotSerializer.js"],
};
