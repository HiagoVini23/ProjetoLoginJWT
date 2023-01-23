import express from "express";
import { AppDataSource } from "./data-source";
var cors = require('cors')
import * as dotenv from "dotenv";
import routes from "./routes";

dotenv.config();
const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT as number, () =>
      console.log(`Listening on all interfaces:${PORT}`)
    );
  })
  .catch((error) => console.log(error));