export function createButton(element) {
    const listaProizvod = element.querySelector(".info_proizvod");

    const dodajButton = document.createElement("button");
    dodajButton.className = "dodaj_proizvod";  
    dodajButton.textContent = "Dodaj Proizvod"; 
    dodajButton.addEventListener("click", dodajProizvod);  

    listaProizvod.appendChild(dodajButton);
}

export function dodajProizvod() {
    const listaProizvod = document.querySelector(".info_proizvod .lista_proizvoda");

    const proizvod = document.createElement("li");
    proizvod.className = "proizvod";

    const ime = document.createElement("p");
    ime.className = "ime";

    const unesiteIme = document.createElement("input");
    unesiteIme.className = "input_ime_proizvoda";  
    unesiteIme.type = "text";  
    unesiteIme.placeholder = "Unesite ime proizvoda";  

    const cijena = document.createElement("input");
    cijena.className = "input_cijena";  
    cijena.type = "text"; 
    cijena.placeholder = "Unesite cijenu proizvoda";  

    const uploadImage = document.createElement("input");
    uploadImage.className = "upload_image"; 
    uploadImage.type = "file"; 
    uploadImage.accept = "image/*";  

    const slikaProizvoda = document.createElement("img");
    slikaProizvoda.className = "slika_proizvoda";

    const divInfoMarket = document.createElement("div");
    divInfoMarket.className = "proizvod_info_market";

    const saveButton = document.createElement("button");
    saveButton.className = "save_button";  // Class for styling
    saveButton.textContent = "Save";  // Button text
    
    ime.appendChild(unesiteIme);  
    proizvod.appendChild(ime);  
    proizvod.appendChild(uploadImage); 
    proizvod.appendChild(cijena);  
    proizvod.appendChild(slikaProizvoda);  
    proizvod.appendChild(divInfoMarket);  
    divInfoMarket.appendChild(saveButton);  

    // Append the new product to the list
    listaProizvod.appendChild(proizvod);
}
