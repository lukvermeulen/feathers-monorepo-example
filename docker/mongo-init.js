db = db.getSiblingDB("data");
db.createUser({
  user: "apiUser",
  pwd: "apiPassword",
  roles: [{ role: "readWrite", db: "data" }],
});

//create user for tests
db = db.getSiblingDB("tests");
db.createUser({
  user: "testUser",
  pwd: "testPassword",
  roles: [{ role: "readWrite", db: "tests" }],
});
