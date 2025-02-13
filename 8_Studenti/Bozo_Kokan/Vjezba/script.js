import { createButton, dodajProizvod } from "./utils/functions.js";

function main() {
    const mainContainer = document.querySelector("main");  // Select the <main> element
    createButton(mainContainer);  // Pass the <main> container to createButton
}

document.addEventListener("DOMContentLoaded", function() {
    main();
});
