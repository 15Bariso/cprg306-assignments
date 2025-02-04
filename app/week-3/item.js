import ItemList from "./item-list.js";


export default function Item(props){
    return(
    <ItemList>
    <section className="bg-pink-200 p-4 m-4">
        <p className="font-bold text-blue-900">Name: {props.name}</p>
        <p>Quantity: {props.quantity}</p>
        <p><span className="font-bold">Category:</span> {props.category}</p>
        </section>;
        </ItemList>
    )
}
