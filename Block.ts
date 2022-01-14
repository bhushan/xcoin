const SHA256 = require("crypto-js/sha256");

export default class Block {
  index: number = 0;
  data: Object = {};
  timestamp: number;
  previousHash: string = "0000000000000000";
  hash: string = "0000000000000000";

  constructor(data: Object) {
    this.data = data;
    this.timestamp = new Date().getTime();
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}
