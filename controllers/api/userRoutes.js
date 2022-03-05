const router = require('express').Router();
const User = require('../../models/User');
//Get all users
router.get('/', async (req, res) =>{
  try
  {
      const allUserData = await User.findAll();
      res.status(200).json(allUserData);

  }catch(err)
  {
      console.log(err);
      res.status(500).send(err);
  }
});


// CREATE new user.
// CREATE new user
//userNameSignup, emailSignup, passwordSignup
router.post('/signup', async (req, res, next) => {
  try {
    console.log(User)
    const dbUserData = await User.create({
      name: req.body.userNameSignup,
      email: req.body.emailSignup,
      password: req.body.passwordSignup,
    });
    console.log(dbUserData)

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



  // Login
router.post('/login', async (req, res, next) => {
    try 
    {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.emailLogin,
        },
      });
  
      if (!dbUserData) 
      {
        res
          .status(400)
          .json({ message: 'Username does not exist!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.passwordLogin);
  
      if (!validPassword)
      {
        res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      await req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).send('LOGGED IN!');      });
        next();
    }catch (err)
    {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get('/logout', async (req, res) => {
    if (req.session.loggedIn) {
      await req.session.destroy( () => res.status(200).end())
    }
    else {
      res.status(400).end()
    }
  })

  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
