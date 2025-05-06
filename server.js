const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "aniedz.contact@gmail.com",
            pass: "iydy kclp yeba pmtd"
        }
    });
    try {
        await transporter.sendMail({
            from: email,
            to: "aniedz.contact@gmail.com",
            subject: `New Message from ${name}`,
            text: message
        });
        res.send("message sent successfully!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to send message.");
    }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
