const util = require("util");
const crypto = require("crypto");

// util.promisify then, catch를 async, await으로 변경해준다. 콜백이 (err, data) 형식일떄
const randomByPromise = util.promisify(crypto.randomBytes);

randomByPromise(64).then((buf) => {
  console.log(buf.toString("base64"));
});
