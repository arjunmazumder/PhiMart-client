import { Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";


const CartAdd = () => {

    const {register, handleSubmit} = useForm();
    const addItem = (data) =>{
        console.log(data)
        

    };

    const cart = [
        {name: 'LapTop', price: 35000},
        {name: 'mobile phone', price: 54000},
        {name: 'wathch', price: 1500}
    ]

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
                                <p className="text-sm text-gray-600">{item.price}</p>
                                <div className="flex items-center">
                                    <button className="bg-red-500 text-white font-bold px-2 py-1 rounded">-</button>
                                    <p className="mx-2 font-bold">1</p>
                                    <button className="bg-green-500 text-white font-bold px-2 py-1 rounded">+</button>
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