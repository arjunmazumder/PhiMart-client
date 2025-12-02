

const List = () => {
    const fruits = ['apple', 'banana', 'orange', 'mango'];

    const HandleItemPrient = (item) => {console.log(item)};

    return (
        <div className="w-96 h-96 bg-blue-400">
            <ul>
                {fruits.map((fruit, index) => (
                    <li onClick={ () => HandleItemPrient(fruit) }  key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
>>>>>>> module28
