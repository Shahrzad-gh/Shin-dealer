const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("It's works");
});

mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err) => {
  if(err) return console.error(err);
  console.log('connected to MongoDB')
});

