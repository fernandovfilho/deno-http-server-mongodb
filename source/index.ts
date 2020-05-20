import { config } from "https://deno.land/x/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import App from "./app.ts";
import todoController from "./controllers/todoController.ts";

const app = new App({ port: 4000 });

const todo = new todoController();

app.app.use("/todo", todo.router);

const client = new MongoClient();

const { DB_USER, DB_PASS, DB_NAME } = config();

client.connectWithUri(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-hpl3e.gcp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
);

await app.run();
