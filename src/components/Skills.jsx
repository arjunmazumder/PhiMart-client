import { useState } from "react";

const Skills = () => {

    const [skills, setSkills] = useState(
        ['C', 'C++', 'Python', 'Django']
    )

    const addSkill=()=>(

        setSkills(
            [...skills, 'Reac.js']
        )

    )

    const deleteSkill=()=>{
        setSkills(
            skills.filter((item) => item != 'C++')
        )

    }


    return (
        <div className="ml-10">
            <h1>Skills</h1>
            <ul className="list-disc">
                {
                    skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                   ))

                }
                
            </ul>
            <button onClick={addSkill} className="px-3 py-3 text-2xl text-white rounded-sm bg-blue-700">Add Skill</button><br/>
            <button onClick={deleteSkill} className="px-3 py-3 text-2xl text-white rounded-sm bg-blue-700">Delete Skill</button>
        </div>
    );
};

export default Skills;