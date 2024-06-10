const port = 4003;
const express = require("express");
const SSLCommerzPayment = require('sslcommerz-lts');
const { Types: { ObjectId } } = require('mongoose'); // Updated import statement

require('dotenv').config();

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = false; // true for live, false for sandbox

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://efty3222:nj3PG6GvAdRrqsYW@cluster0.nzlkviu.mongodb.net/SPL-2")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Express app is running");
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cartData: {
    type: Object,
  },
  phone: {
    type: String,
    required: true
  },
  professionalPosition: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
  courses: {
    type: [String],
    required: true
  }
});

const User = mongoose.model('User', userSchema);

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, 'secret_ecom');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

app.post('/register', async (req, res) => {
  console.log('Request body:', req.body);
  try {
    const { name, email, password, number, category, dob, registrationNumber, courses } = req.body;

    if (!name || !email || !password || !number || !category || !dob || !registrationNumber || !Array.isArray(courses) || courses.length === 0) {
      return res.status(400).json({ success: false, errors: 'All fields are required and courses should be a non-empty array' });
    }

    let check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({ success: false, errors: 'Existing user found with the same email id' });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone: number,
      professionalPosition: req.body.professionalPosition,
      cartData: cart,
      category,
      dob,
      registrationNumber,
      courses,
    });

    await user.save();

    console.log('User saved:', user);

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token, user });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ success: false, errors: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      const passCompare = await bcrypt.compare(req.body.password, user.password);

      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token, user });
      } else {
        res.status(400).json({ success: false, errors: 'Wrong Password' });
      }
    } else {
      res.status(400).json({ success: false, errors: 'Wrong Email Id' });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ success: false, errors: 'Internal server error' });
  }
});

app.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ success: false, errors: 'Internal server error' });
  }
});

app.get('/user-courses', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('courses');
    res.json(user.courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ success: false, errors: 'Internal server error' });
  }
});

//const trans_id = new ObjectId().toString();

app.post('/order', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    console.log(user);

    // Generate a unique transaction ID
    const trans_id = new ObjectId().toString();

    const data = {
      total_amount: 100,
      currency: 'BDT',
      tran_id: trans_id,
      success_url: `http://localhost:4003/payment/success/${trans_id}`,
      fail_url: 'http://localhost:3030/fail',
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: user.name,
      cus_email: user.email,
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      cus_fax: '01711111111',
      ship_name: user.name,
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(data).then(apiResponse => {
      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.send({ url: GatewayPageURL });
      console.log('Redirecting to: ', GatewayPageURL);
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.post("/payment/success/:tran_id", async (req, res) => {
  console.log(req.params.tran_id);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port:" + port);
  } else {
    console.log("Error :" + error);
  }
});