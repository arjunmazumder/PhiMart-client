import { useState } from "react";


const Person = () => {
    const [person, setPerson] = useState("Tani")
    const handleClick = () =>{
         setPerson("Arjun")
         console.log(person)
    }
    return (
        <div className="m-5"> 

            <button onClick={handleClick} className="px-3 py-2 bg-blue-500 text-white rounded-sm">Click Me</button>
            
        </div>
    );
};

export default Person;