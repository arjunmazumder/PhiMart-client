import { Trash2 } from "lucide-react";
import { useState } from "react";
import { set, useForm } from "react-hook-form";


const CartAdd = () => {

    const {register, handleSubmit} = useForm();
    const [cart, setCart] = useState([])
    const addItem = (data) =>{
        const existingItem = cart.find((item) => item.name === data.name)
        if(existingItem){
            setCart(
                cart.map(
                    (item) => item.name === data.name?{
                        ... item, quantity: item.quantity +1
                    }:item

                )
            )

        }else{
                setCart(
                [... cart, {name: data.name, price: data.price, quantity: 1}]
            )

        }
        
        

    };

    // Increase Quantity
    const increaseQuantity =(name) => {
        setCart(
            cart.map(
                (item) => item.name === name? {
                    ... item, quantity: item.quantity + 1
                } : item
            )
        )

    }

    

    return (
        <div className="w-2/3 mx-auto bg-gray-100 rounded-lg p-6 shadow-md mt-10">
            {/* Add Cart Items */}
            <form onSubmit={handleSubmit(addItem)} className="space-y-2 mb-4">
                <input {... register("name", {required: true})} type="text" className="border p-2 rounded w-full " placeholder="Item Name" />
                <input {... register("price", {required: true})} type="number" className="border p-2 rounded w-full" placeholder="Item Price" />
                <button className="bg-blue-500 w-full text-white py-2 rounded">Add Item</button>
            </form>

            {/* cart items list */}

            {
               cart.length >0 ?( 
                <div>
                    {
                        cart.map(item =>(
                            <div key={item.name} className="flex justify-between items-center p-2 bg-white rounded mb-2">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-600">{(item.price * item.quantity).toFixed(2)}</p>
                                <div className="flex items-center">
                                    <button className="bg-red-500 text-white font-bold px-2 py-1 rounded">-</button>
                                    <p className="mx-2 font-bold">{item.quantity}</p>
                                    <button onClick={() => increaseQuantity(item.name) } className="bg-green-500 text-white font-bold px-2 py-1 rounded">+</button>
                                </div>
                                <button><Trash2 /></button>
                            </div>

                        ))
                    }

                </div>
               ) : (
               <p>No Cart items</p>
            )}

            {/* Total Price */}

            <div className="mt-4 font-bold text-lg">
                Total Price : 15422589
            </div>



            
        </div>
    );
};

export default CartAdd;