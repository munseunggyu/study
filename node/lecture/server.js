const http = require("http");
const fs = require("fs").promises;

const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const data = await fs.readFile("./server.html");
      res.end(data);
    } catch (error) {
      console.log(error);
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    }
  })
  .listen(8080);
server.on("listening", () => {
  console.log(`8080 port start...`);
});
server.on("error", (error) => {
  console.log(error);
});
