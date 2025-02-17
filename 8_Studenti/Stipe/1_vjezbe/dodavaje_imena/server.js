const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Kreiranje baze i tablice
const db = new sqlite3.Database("./baza.db", (err) => {
  if (err) console.error(err.message);
  console.log("Connected to SQLite database.");
});

db.run(
  `CREATE TABLE IF NOT EXISTS osobe (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ime TEXT UNIQUE,
    godine INTEGER,
    grad TEXT,
    drzava TEXT,
    email TEXT,
    telefon TEXT
  )`
);

// Ruta: Dohvati sva imena
app.get("/imena", (req, res) => {
  db.all("SELECT * FROM osobe", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Ruta: Dodaj novo ime
app.post("/dodaj-ime", (req, res) => {
  const { ime } = req.body;
  if (!ime) return res.status(400).json({ error: "Ime je obavezno!" });

  db.run("INSERT INTO osobe (ime) VALUES (?)", [ime], function (err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID, ime });
  });
});

// Ruta: Ažuriraj podatke za ime
app.put("/azuriraj/:ime", (req, res) => {
  const { ime } = req.params;
  const { godine, grad, drzava, email, telefon } = req.body;

  db.run(
    `UPDATE osobe SET godine=?, grad=?, drzava=?, email=?, telefon=? WHERE ime=?`,
    [godine, grad, drzava, email, telefon, ime],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ message: "Podaci su ažurirani!" });
    }
  );
});

// Ruta: Obriši ime
app.delete("/obrisi/:ime", (req, res) => {
  const { ime } = req.params;

  db.run("DELETE FROM osobe WHERE ime=?", [ime], function (err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: "Ime obrisano!" });
  });
});

// Pokretanje servera
app.listen(PORT, () => console.log(`Server pokrenut na http://localhost:${PORT}`));




