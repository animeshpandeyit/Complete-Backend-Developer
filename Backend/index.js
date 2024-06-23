import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "John 1",
      content: "Hello",
    },
    {
      id: 2,
      title: "John 2",
      content: "Hello",
    },
    {
      id: 3,
      title: "John 3",
      content: "Hello",
    },
    {
      id: 4,
      title: "John 4",
      content: "Hello",
    },
    {
      id: 5,
      title: "John 5",
      content: "Hello",
    },
  ];

  /* The line `res.send({ jokes: jokes });` is sending a response back to the client with a JSON object
  containing an array of jokes. The object key is "jokes" and the value is the array of jokes that
  was defined earlier in the code. This allows the client to receive the list of jokes when they
  access the "/jokes" endpoint. */
  res.send({ jokes: jokes });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
