const router = require("express").Router();

const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const paymentRoute = require("./paymentRoute");

module.exports = () => {
  router.get("/test", (req, res) => res.send("Yeah it works!"));

  router.use("/users", userRoute());
  router.use("/request", requestRoute());
  router.use("/payment", paymentRoute);

  return router;
};
