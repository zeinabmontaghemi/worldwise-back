import jsonServer from "json-server";
import cors from "cors";
import express from "express";
import path from "path";

const app = express();
const router = jsonServer.router("data/cities.json"); // Path to your JSON file
const middlewares = jsonServer.defaults();

app.use(cors()); // Enable CORS
app.use(middlewares);

// Serve static files from the React app using express
app.use(express.static(path.join(process.cwd(), "build"))); // Ensure this points to your build folder

// Use the JSON router
app.use("/api", router); // Adjust the route as necessary

const PORT = process.env.PORT || 9000; // Set your port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
