const router = require('express').Router();
const { User } = require('../../models/User');

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
router.post('/signup', async (req, res, next) => {

    try 
    {
      const dbUserData = await User.create(req.body);
        next();
        console.log(dbUserData)
        req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbUserData);

      });
  
    } catch (err) 
    {
      console.log( "ERROR", err);
      window.alert(err)
      res.status(500).json(err);
      next();

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
          .json({ message: 'Incorrect email or password. Please try again!' });
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
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
  
    }catch (err)
    {
      console.log(err);
      res.status(500).json(err);
      next();
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
