function handler(req, res) {
  const { email, name, message } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    res.status(422).json({ messgae: "Invalid input" });
    return;
  }

  // Store it in a DB
  const newMessage = {
    email,
    name,
    message,
  };

  console.log(newMessage);

  res
    .status(201)
    .json({ message: "Successfully stored message!", message: newMessage });
}

export default handler;
