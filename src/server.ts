import express from "express";
import config from "config";
import connect from "./utils/connect";
import routes from "./utils/routes";

const app = express();

const port = config.get<number>('port');

app.use(express.json());

app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);

    await connect();

    routes(app);
});