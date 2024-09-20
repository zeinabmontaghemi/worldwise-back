import jsonServer from "json-server";
import cors from "cors";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.rewriter({ "/api/*": "/$1" }));
server.use(jsonServer.static(path.join(process.cwd(), "build"))); // Update to your build folder

const PORT = process.env.PORT || 9000;
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
