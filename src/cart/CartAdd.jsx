import { useForm } from "react-hook-form";


const CartAdd = () => {

    const {register, handleSubmit} = useForm();
    const addItem = (data) =>{
        console.log(data)
        

    };

    return (
        <div className="w-2/3 mx-auto bg-gray-100 rounded-lg p-6 shadow-md mt-10">
            <form onSubmit={handleSubmit(addItem)} className="space-y-2">
                <input {... register("name", {required: true})} type="text" className="border p-2 rounded w-full " placeholder="Item Name" />
                <input {... register("price", {required: true})} type="number" className="border p-2 rounded w-full" placeholder="Item Price" />
                <button className="bg-blue-500 w-full text-white py-2 rounded">Add Item</button>
            </form>
            
        </div>
    );
};

export default CartAdd;