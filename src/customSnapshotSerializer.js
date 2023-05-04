const customSnapshotSerializer = {
  serialize: (val) => `injected by snapshot serializer ${val}`,
  test: (val) => typeof val === "string",
};

module.exports = customSnapshotSerializer;
