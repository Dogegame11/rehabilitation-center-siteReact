const express = require("express");
const cors = require("cors");

const BOT_TOKEN = "8063365507:AAECHxPykzv__wS1NNjJydnVNEuLJ-ilhz8";
const CHAT_ID = "540205047";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.post("/api/appointments", async (req, res) => {
  const { name, phone, email, date, time } = req.body;

  if (!name || !phone || !date || !time) {
    return res.status(400).json({ error: "Missing fields" });
  }

  console.log("NEW APPOINTMENT:", {
    name,
    phone,
    email,
    date,
    time,
  });

  const message = `
  Новий запис на прийом:
  Імʼя: ${name}
  Телефон: ${phone}
  Email: ${email || "Не вказано"}
  Дата: ${date}
  Час: ${time}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      },
    );
    const data = await response.json();
    console.log("Telegram message: ", data);
  } catch (e) {
    console.log("Telegram message error", e);
  }
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
