

const List = () => {
    const euroCountries = [
    "Austria",
    "Belgium",
    "Croatia",
    "Cyprus",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Portugal",
    "Slovakia",
    "Slovenia",
    "Spain"
]

    const HandleItemPrient = (item) => {console.log(item)};

    return (
        <div>
            <ul>
                {euroCountries.map((country, index) => (
                    <li onClick={ () => HandleItemPrient(country) }  key={index}>{country}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
