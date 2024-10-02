const http = require("http");
const server = http.createServer((req, res) => {
res.writeHead(200, { "Content-Type": "text/plain" });
res.end("Hello, sycamore!");
});
server.listen(6000, () => {
console.log("Server running on port 6000");
});