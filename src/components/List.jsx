

const List = () => {
    const fruits = ['apple', 'banana', 'orange', 'mango'];

    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
