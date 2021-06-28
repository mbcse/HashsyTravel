const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: "https://hashsytravel-mbcsehashnode.harperdbcloud.com",
  username: "mbcse",
  password: "mohit@12345",
  schema: "hashsytravel" // optional
};

const Client = harperive.Client;
const db = new Client(DB_CONFIG);
module.exports = db;