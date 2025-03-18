export default function User({ime, years, onNameChange, onDeleteUser}){

    return (
        <>
    <p>
        Pozdrav moje ime je {ime} i imam nesto {years} godina (Function)
    </p>
       <input type="text" value={ime} onChange={onNameChange}/>
       <button onClick={onDeleteUser}>Delete</button>
        </>
    );
}