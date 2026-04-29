import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/v1/chickens', (req, res) =>
{
  res.send('Hello There!');
});

app.listen(port, () =>
{
  console.log(`Example app listening at http://localhost:${port}`);
});