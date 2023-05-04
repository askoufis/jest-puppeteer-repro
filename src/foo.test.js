const customSnapshotSerializer = require("./customSnapshotSerializer");

expect.addSnapshotSerializer(customSnapshotSerializer);

it("foo", () => {
  const foo = "foo";

  expect(foo).toMatchSnapshot();
});
