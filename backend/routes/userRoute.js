import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util'

const router = express.Router();

//  Send the query to the database to validate signin
router.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser)
    })
  } else {
    res.status(401).send({ msg: 'Email o contraseña incorrectos' });
  }
})

router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: 'Jara',
      email: 'jarasmar@gmail.com',
      password: '123456',
      isAdmin: true
    });
  
    const newUser = await user.save();
  
    res.send(newUser);

  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;