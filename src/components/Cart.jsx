
const Cart = ({CartItems}) => {
    return (
        <div>
            <ul>
                {
                    CartItems.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default Cart;