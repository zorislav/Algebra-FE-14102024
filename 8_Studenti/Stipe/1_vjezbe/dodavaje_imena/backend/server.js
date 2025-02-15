const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Povezivanje na MongoDB
mongoose.connect("mongodb://localhost:27017/imenaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Povezano na MongoDB"))
  .catch(err => console.error("❌ Greška pri povezivanju na MongoDB:", err));

// Definirajmo Mongoose model za ime
const ImeSchema = new mongoose.Schema({
    ime: String
});

const Ime = mongoose.model("Ime", ImeSchema);

// API rute

// 📌 Dohvaćanje svih imena
app.get("/imena", async (req, res) => {
    try {
        const imena = await Ime.find();
        res.json(imena);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Dodavanje novog imena
app.post("/imena", async (req, res) => {
    const novoIme = new Ime({ ime: req.body.ime });
    try {
        await novoIme.save();
        res.status(201).json(novoIme);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Brisanje imena
app.delete("/imena/:id", async (req, res) => {
    try {
        await Ime.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Ime obrisano" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Pokretanje servera
app.listen(PORT, () => {
    console.log(`✅ Server pokrenut na http://localhost:${PORT}`);
});
