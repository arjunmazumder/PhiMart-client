

const List = () => {
    const fruits = ['apple', 'banana', 'orange', 'mango'];

    const HandleItemPrient = (item) => {console.log(item)};

    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li onClick={ () => HandleItemPrient(fruit) }  key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
