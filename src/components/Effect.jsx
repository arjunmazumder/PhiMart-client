import { useEffect } from 'react';

const Effect = () => {
    useEffect( () => {
        console.log("Effect occured")
    });
    return (
        <div>
            <h1>UserList</h1>
            
        </div>
    );
};

export default Effect;