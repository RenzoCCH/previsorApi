import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 1235;

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });
  })
  .catch(console.log);
