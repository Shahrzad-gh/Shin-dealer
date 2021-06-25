const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middlewares/commonMiddleware');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require("path");
const userRoutes = require('./routes/userRoutes');

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
app.get('/shipping', requireAuth);

app.use(authRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(cartRoutes);
app.use(userRoutes);