const router = require('express').Router();
const User = require('../../models/User');



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

      res.redirect('/highlights');
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
  
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.passwordLogin);


    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
  
    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      console.log("********************************************************************************************", req.session.user_id)
      res.json({ user: userData, message: 'You are now logged in!' });
    });
    }catch (err)
    {
      console.log(err);
      res.status(500).json(err);
    }
  });

  
  router.get('/logout', async (req, res) => {
    if (req.session.loggedIn) {
      await req.session.destroy( () => res.status(200).end())
      res.redirect('/login')
    }
    else {
      res.status(400).end()
    }
  })


module.exports = router;
