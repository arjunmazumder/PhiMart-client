import { useState } from "react";

const Employee = () => {
    const employeeArray = [
        {name: 'Sithi', age: 15},
        {name: 'Arjun', age: 24},
        {name: 'Sithika', age: 16},
        {name: 'pushpita', age: 18},
        {name: 'fikifiki', age:70}
    ];

    const [employee, setEmployee] = useState(employeeArray);

    const handleClick=()=>{
        setEmployee(
            employee.map(
                (emp) => emp.name === 'Sithi' ? { ...emp, age: 19} : emp
            )
        );

    };


    return (
        <div>
            <ul>
                {employee.map((emp, index) => (
                    <li key={index}>
                        Name: {emp.name} Age: {emp.age}
                    </li>
                )
                )}
            </ul>

            <button onClick={handleClick} className="px-3 py-3 text-2xl text-white rounded-sm bg-blue-700">get merida age </button>
            
        </div>
    );
};

export default Employee;