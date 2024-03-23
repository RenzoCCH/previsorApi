import app from "./app";

const port = process.env.PORT || 1235;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
