const express = require("express");

const app = express();

// Get data by userId

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  if (userId == 1) {
    const data = {
      userId: 1,
      name: "Jyotiprakash Mohanta",
      email: "jyoti@gmail.com",
    };
    res.status(200).json(data);
  } else if (userId == 2) {
    res.status(404).json({
      error: "User not found",
    });
  } else {
    res.status(500).json({
      error: "Server error",
    });
  }
});

app.listen(8000, "localhost", () => {
  console.log("Server is running on port: ", 8000);
});
