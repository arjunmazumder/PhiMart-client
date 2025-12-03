import { useState } from "react";


const Person = () => {
    const [person, setPerson] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            address: {
                city: "Dhaka",
                thana: "Addabor",
            }

        }
        
    )

    const handleClick = () =>{
         const newPerson = {
            ...person,
            firstName: "Arjun",
            lastName: "Mazmder",
            email: "arjun@gmail.com",
            address:{
                ...person,
                city: "Barisal"
            }
            
            

         };

         setPerson(newPerson);


    }
    return (
        <div className="m-5"> 
        <p>{person.firstName} {person.lastName}</p>
         <p>{person.email}</p>
         <h1>{person.address.city}</h1>

            <button onClick={handleClick} className="px-3 py-2 bg-blue-500 text-white rounded-sm">Click Me</button>
            
        </div>
    );
};

export default Person;