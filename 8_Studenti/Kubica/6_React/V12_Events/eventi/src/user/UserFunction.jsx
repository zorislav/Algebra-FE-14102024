//import { useState } from "react";

export default function UserFunction({ ime, years = 100, onNameChange }) {
  //const [lokalnoIme, setLokalnoIme] = useState("");

  //const { ime, years } = props;

  // const onLokalnoImeChange = (event) => {
  //   setLokalnoIme(event.target.value);
  // };

  return (
    <>
      <p>
        Pozdrav moje ime je {ime} i imam {years} godina.
      </p>
      <input type="text" value={ime} onChange={onNameChange} />
    </>
  );
}

// }

// export default function UserFunction({ user }) {
//   const { name, years } = user;

//   return (
//     <p>
//       Pozdrav moje ime je {name} i imam {years} godina.
//     </p>
//   );
// }
