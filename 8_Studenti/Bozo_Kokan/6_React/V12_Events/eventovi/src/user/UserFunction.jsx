// import { useState } from "react";

export default function UserFunction({ime, years = 100, onNameChange}){
    // const [localIme, setLokalnoIme] = useState(ime);

    // Dekompozicija ---> const { ime, years } = props;

    // const onLokalnoImeChange = (event) => {
    //     setLokalnoIme(event.target.value);
    // }

    return (
        <>
    <p>
        Pozdrav moje ime je {ime} i imam nesto {years} godina (Function)
    </p>
    <input type="text" value={ime} onChange={onNameChange}/>
        </>
    );
}

