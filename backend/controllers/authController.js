const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
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
};

exports.login = async (req, res) => {
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
};