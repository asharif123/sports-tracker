const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.get("/test", (res) => {
    res.status(200).json({ test: 'hi' })
})
router.use("/", userRoutes);

module.exports = router;