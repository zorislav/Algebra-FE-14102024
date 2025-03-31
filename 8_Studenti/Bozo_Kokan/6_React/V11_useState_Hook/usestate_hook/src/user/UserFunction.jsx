export default function UserFunction({ime, years = 100}){

    // Dekompozicija ---> const { ime, years } = props;

    return (
    <p>
        Pozdrav moje ime je {ime} i imam nesto {years} godina (Function)
    </p>
    );
}

