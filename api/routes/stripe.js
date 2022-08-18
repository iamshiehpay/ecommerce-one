const router = require("express").Router();
// .env not working
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const KEY = process.env.STRIPE_KEY
// const stripe = require("stripe")(KEY);
// ----
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51LX2BfBpotuhsJslHtCNfBRVePcqbCjgC0wc51tfgPQ3gXa2SpCKGUDovslX1A2aDdd2KGcip14P3cQmvkCxLqFu00GIsZlTDL');


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;