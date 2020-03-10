import express from "express";
import cors from "cors";

import routes from "./routes";

const app = express();

app.use(cors());

app.use("/api", routes);

export default app.listen(process.env.PORT || 3000);