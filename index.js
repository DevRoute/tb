const path = require("path");
const liveServer = require("live-server");

liveServer.start({
	port: 8181,
	root: path.resolve(__dirname, "./"),
})
