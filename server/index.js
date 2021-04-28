const express = require('express');
const app = express();
// database connection
//const dbURI = 'mongodb+srv://admin:ymg5cyL00K0yr5j9@cluster.wfrkl.mongodb.net/Projects?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.get('/', (req, res) => {
  res.send("It's works");
});