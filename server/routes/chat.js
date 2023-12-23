const router = require("express").Router();
const openai = require("../utils/openai");

router.post("/chat", async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  res.status(200).json(completion.choices[0]);
  console.log(completion.choices[0]);
});

module.exports = router;
