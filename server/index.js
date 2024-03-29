const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cookieParser = require("cookie-parser");
const {
  requireAuth,
  checkUser,
  adminMiddleware,
} = require("./middlewares/commonMiddleware");
const dotenv = require("dotenv");
const cors = require("cors");
//const path = require("path");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
//const crypto = require('crypto');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    preflightContinue: false,
    credentials: true,
  })
);

//view engine
app.set("view engine", "ejs");

// database connection
mongoose
  .connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(
      PORT,
      console.log(`app connected to MongoDB & listen to port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err));

// routes
//app.get('*');
// app.get('/shipping', requireAuth);
// app.get('/admin', requireAuth, checkUser, adminMiddleware);
app.post("/verification", (req, res) => {
  res.json({ status: "OK" });
});

app.use(authRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(cartRoutes);
app.use(userRoutes);
app.use(orderRoutes);
app.use(paymentRoutes);
