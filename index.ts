import Block from "./Block";

import Blockchain from "./Blockchain";

const xcoin = new Blockchain();

xcoin.addBlock(new Block({ amount: 10 }));
xcoin.addBlock(new Block({ amount: 20 }));
xcoin.addBlock(new Block({ amount: 30 }));
xcoin.addBlock(new Block({ amount: 40 }));

console.log(JSON.stringify(xcoin, null, 2));

console.log("is blockchain valid? " + xcoin.isValid());

const secondBlock = xcoin.chain[1];
secondBlock.data = { amount: 100 };
secondBlock.hash = secondBlock.calculateHash();

console.log("is blockchain valid after change? " + xcoin.isValid());
