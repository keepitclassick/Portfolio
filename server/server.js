const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const nodemailer = require("nodemailer");

//middleware

app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: "https://localhost:8000",
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "keepitclassick@gmail.com",
      pass: "pvudknnnktnaypyo",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "kayla_johnston@icloud.com",
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent");
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
