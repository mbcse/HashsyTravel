const ipfsAPI = require("ipfs-api");
const ipfs = ipfsAPI("localhost", "5001", { protocol: "http" });

module.exports={ipfs};
