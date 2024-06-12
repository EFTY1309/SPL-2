const express = require("express");
const SSLCommerzPayment = require('sslcommerz-lts');
const { Types: { ObjectId } } = require('mongoose');
require('dotenv').config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const port = 4003;
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = false; // true for live, false for sandbox

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

const registeredUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  courses: {
    type: [String],
    required: true
  },
  tran_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
const RegisteredUser = mongoose.model('RegisteredUser', registeredUserSchema);
const Event = mongoose.model("Event", eventSchema);

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
  });
  
  const upload = multer({ storage: storage });
  
  app.use('/images', express.static('upload/images'));
  
  app.post("/upload", upload.single('image'), (req, res) => {
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
  });
  
  app.post('/addevent', async (req, res) => {
    const { name, date, description, image } = req.body;
  
    const event = new Event({
      name,
      date,
      description,
      image
    });
  
    try {
      await event.save();
      res.json({ success: true, event });
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).json({ success: false, errors: 'Failed to add event' });
    }
  });

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  console.log('Received token:', token); // Debug line
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

// Temporary storage for transactions
let transactions = {};

// Apply authMiddleware to this route
app.post('/order', authMiddleware, async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
  
      const trans_id = new ObjectId().toString();
      const { total_amount, user: userDetails, course } = req.body;
  
      const data = {
        total_amount,
        currency: 'BDT',
        tran_id: trans_id,
        success_url: `http://localhost:4003/payment/success/${trans_id}`,
        fail_url: 'http://localhost:4003/payment/fail',
        cancel_url: 'http://localhost:4003/payment/cancel',
        ipn_url: 'http://localhost:4003/payment/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: userDetails.name,
        cus_email: userDetails.email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: userDetails.name,
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: '1000',
        ship_country: 'Bangladesh',
      };
  
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      const apiResponse = await sslcz.init(data);
  
      transactions[trans_id] = { total_amount, userDetails, course };
  
      return res.status(200).json({ success: true, url: apiResponse.GatewayPageURL });
    } catch (error) {
      console.error('Error creating order:', error);
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }
  });
  
app.post('/payment/success/:tran_id', async (req, res) => {
  try {
    const transactionId = req.params.tran_id;
    const paymentData = transactions[transactionId];
    console.log("Transaction ID:", transactionId);
    console.log("Payment Data:", paymentData);

    if (!paymentData) {
      return res.status(400).json({ success: false, error: "Invalid transaction ID or payment data not found" });
    }

    const { userDetails, course } = paymentData;

    // Add the single course to the courses array if it's not already present
    let courses = userDetails.courses || [];
    if (course && !courses.includes(course)) {
      courses.push(course);
    }

    const registeredUser = new RegisteredUser({
      name: userDetails.name,
      email: userDetails.email,
      category: userDetails.category,
      courses: courses,
      tran_id: transactionId
    });

    await registeredUser.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userDetails.email,
      subject: 'Course Enrollment Successful',
      text: `Dear ${userDetails.name},\n\nYou have been successfully enrolled in the following courses:\n${courses.join(', ')}.\n\nThank you for choosing our platform!\n\nBest regards,\nYour Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    // Remove transaction data from in-memory store after successful processing
    delete transactions[transactionId];

    // Redirect to the frontend route with the transaction ID as a query parameter
    res.redirect(`http://localhost:5173/payment-success?tran_id=${transactionId}`);
  } catch (error) {
    console.error("Error handling payment success:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
