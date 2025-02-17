<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Podaci iz forme
    $ime = htmlspecialchars($_POST['ime']);
    $prezime = htmlspecialchars($_POST['prezime']);
    $broj_mobitela = htmlspecialchars($_POST['broj_mobitela']);
    $email = htmlspecialchars($_POST['email']);

    // Email na koji šaljete podatke
    $to = "stipe.saric@gmail.com";

    // Predmet i sadržaj emaila
    $subject = "Nova poruka s kontakt forme";
    $message = "Imate novu poruku s kontakt forme:\n\n";
    $message .= "Ime: $ime\n";
    $message .= "Prezime: $prezime\n";
    $message .= "Broj mobitela: $broj_mobitela\n";
    $message .= "Email: $email\n";

    // Zaglavlje
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Slanje emaila
    if (mail($to, $subject, $message, $headers)) {
        echo "Poruka je uspješno poslana.";
    } else {
        echo "Došlo je do pogreške pri slanju poruke.";
    }
} else {
    echo "Nevažeći zahtjev.";
}
?>
