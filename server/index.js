const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middlewares/authMiddleware');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}))

//view engine
app.set('view engine', 'ejs');

// database connection
mongoose.connect(process.env.MDB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(PORT, console.log(`app connected to MongoDB & listen to port: ${PORT}`)))
  .catch((err) => console.log(err));

// routes
app.get('*');
app.get('/', (req, res) => console.log('home'));
//app.get('/shipping', requireAuth, (req, res) => res.render('shipping'));
app.use(authRoutes);