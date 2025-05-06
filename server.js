const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve all static files from the root directory
app.use(express.static(__dirname));

// Endpoint for sending messages
app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "aniedz.contact@gmail.com",
            pass: "iydy kclp yeba pmtd"  // (make sure this is a real app password)
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: "aniedz.contact@gmail.com",
            subject: `New message from ${name}`,
            text: message
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});