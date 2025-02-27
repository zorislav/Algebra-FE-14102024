document.addEventListener("DOMContentLoaded", () => {
    const imeInput = document.getElementById("imeInput");
    const dodajImeBtn = document.getElementById("dodajIme");
    const listaImena = document.getElementById("listaImena");

    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const spremiPodatkeBtn = document.getElementById("spremiPodatke");

    const deleteModal = document.getElementById("deleteModal");
    const potvrdiBrisanje = document.getElementById("potvrdiBrisanje");
    const odustaniBrisanje = document.getElementById("odustaniBrisanje");

    let trenutnoIme = "";

    // Dohvati imena iz baze
    function dohvatiImena() {
        fetch("http://localhost:5000/imena")
            .then(res => res.json())
            .then(data => {
                listaImena.innerHTML = "";
                data.forEach(osoba => {
                    const li = document.createElement("li");
                    li.textContent = osoba.ime;
                    li.style.cursor = "pointer";

                    // Otvori modal s podacima kad kliknemo na ime
                    li.addEventListener("click", () => {
                        trenutnoIme = osoba.ime;
                        document.getElementById("godine").value = osoba.godine || "";
                        document.getElementById("grad").value = osoba.grad || "";
                        document.getElementById("drzava").value = osoba.drzava || "";
                        document.getElementById("email").value = osoba.email || "";
                        document.getElementById("telefon").value = osoba.telefon || "";
                        modal.style.display = "flex";
                    });

                    // Dodaj X dugme za brisanje
                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "X";
                    deleteBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        trenutnoIme = osoba.ime;
                        deleteModal.style.display = "flex";
                    });

                    li.appendChild(deleteBtn);
                    listaImena.appendChild(li);
                });
            });
    }

    // Dodaj ime u bazu
    dodajImeBtn.addEventListener("click", () => {
        const novoIme = imeInput.value.trim();
        if (!novoIme) return;

        fetch("http://localhost:5000/dodaj-ime", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ime: novoIme })
        }).then(() => {
            imeInput.value = "";
            dohvatiImena();
        });
    });

    // Spremi podatke u bazu
    spremiPodatkeBtn.addEventListener("click", () => {
        const godine = document.getElementById("godine").value;
        const grad = document.getElementById("grad").value;
        const drzava = document.getElementById("drzava").value;
        const email = document.getElementById("email").value;
        const telefon = document.getElementById("telefon").value;

        fetch(`http://localhost:5000/azuriraj/${trenutnoIme}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ godine, grad, drzava, email, telefon })
        }).then(() => {
            modal.style.display = "none";
            dohvatiImena();
        });
    });

    // Potvrdi brisanje
    potvrdiBrisanje.addEventListener("click", () => {
        fetch(`http://localhost:5000/obrisi/${trenutnoIme}`, { method: "DELETE" })
            .then(() => {
                deleteModal.style.display = "none";
                dohvatiImena();
            });
    });

    // Zatvori modal za brisanje
    odustaniBrisanje.addEventListener("click", () => deleteModal.style.display = "none");

    closeModal.addEventListener("click", () => modal.style.display = "none");

    dohvatiImena();
});


 