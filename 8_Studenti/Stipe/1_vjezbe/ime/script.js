document.addEventListener("DOMContentLoaded", function () {
    loadNames();
});

document.getElementById("imeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let imePrezime = document.getElementById("imePrezime").value;
    if (imePrezime.trim() === "") return;

    addNameToList(imePrezime);
    saveName(imePrezime);

    document.getElementById("imePrezime").value = "";
});

document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("detailsForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let imePrezime = document.getElementById("popup").dataset.ime;
    let details = {
        godine: document.getElementById("godine").value,
        mjesto: document.getElementById("mjesto").value,
        drzava: document.getElementById("drzava").value,
        email: document.getElementById("email").value,
        telefon: document.getElementById("telefon").value
    };

    localStorage.setItem(imePrezime, JSON.stringify(details));
    document.getElementById("popup").style.display = "none";
});

function addNameToList(imePrezime) {
    let li = document.createElement("li");
    li.textContent = imePrezime;
    li.dataset.ime = imePrezime;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        if (confirm(`Jeste li sigurni da želite izbrisati "${imePrezime}"?`)) {
            removeName(imePrezime);
            li.remove();
        }
    });

    li.appendChild(deleteBtn);
    document.getElementById("imeLista").appendChild(li);

    li.addEventListener("click", function () {
        openPopup(li.dataset.ime);
    });
}

function openPopup(ime) {
    let details = JSON.parse(localStorage.getItem(ime)) || {};

    document.getElementById("godine").value = details.godine || "";
    document.getElementById("mjesto").value = details.mjesto || "";
    document.getElementById("drzava").value = details.drzava || "";
    document.getElementById("email").value = details.email || "";
    document.getElementById("telefon").value = details.telefon || "";

    // Postavi naslov s imenom i prezimenom
    document.querySelector("#popup h2").textContent = `Unesi podatke za ${ime}`;

    document.getElementById("popup").dataset.ime = ime;
    document.getElementById("popup").style.display = "block";
}


function saveName(imePrezime) {
    let storedNames = JSON.parse(localStorage.getItem("names")) || [];
    if (!storedNames.includes(imePrezime)) {
        storedNames.push(imePrezime);
        localStorage.setItem("names", JSON.stringify(storedNames));
    }
}

function removeName(imePrezime) {
    localStorage.removeItem(imePrezime);
    let storedNames = JSON.parse(localStorage.getItem("names")) || [];
    storedNames = storedNames.filter(name => name !== imePrezime);
    localStorage.setItem("names", JSON.stringify(storedNames));
}

function loadNames() {
    let storedNames = JSON.parse(localStorage.getItem("names")) || [];
    storedNames.forEach(name => addNameToList(name));
}

