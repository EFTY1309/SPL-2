const port = 4003;
const express = require("express");
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
    let check = await User.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ success: false, errors: 'Existing user found with the same email id' });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Validate if courses is an array and not empty
    if (!Array.isArray(req.body.courses) || req.body.courses.length === 0) {
      return res.status(400).json({ success: false, errors: 'Courses should be a non-empty array' });
    }

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.number,
      professionalPosition: req.body.professionalPosition,
      cartData: cart,
      category: req.body.category,
      dob: req.body.dob,
      registrationNumber: req.body.registrationNumber,
      courses: req.body.courses,
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
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, errors: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
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
      res.json({ success: false, errors: 'Wrong Password' });
    }
  } else {
    res.json({ success: false, errors: 'Wrong Email Id' });
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

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port:" + port);
  } else {
    console.log("Error :" + error);
  }
});
