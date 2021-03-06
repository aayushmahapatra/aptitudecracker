require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// My Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const topicRoutes = require('./routes/topic');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
// const paymentBRoutes = require('./routes/payment');

// DB connection
mongoose.connect("mongodb+srv://allen:12345678allen@cluster0.srb4t.mongodb.net/aptitude?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('DB CONNECTED');
});

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', topicRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
// app.use('/api', paymentBRoutes);

// PORT
const port = process.env.PORT || 8000;

// Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!');
})
