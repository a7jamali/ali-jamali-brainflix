const express = require("express");
const Logger = require("./middleware/Logger");
const cors = require("cors");
const app = express();

app.use(Logger);

app.use(cors());

app.use(express.json());

app.use("/videos", require("./routes/videos"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`port is running on ${PORT}`, __filename));
