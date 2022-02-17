import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const CartWidget = () =>{

    const { cartList, deleteOne, emptyCart, sumaTotal } = useCartContext()

       console.log( cartList.length )

    return(

        <div>
            
            <h1 className="text-center mt-5">Cart</h1>
            <hr />
            
        {
            (cartList.length === 0)
            
            &&
            
            <div>
                <p>No hay items en tu carrito...</p>
                <Link to='/'>
                    <button>Continuar comprando</button>
                </Link>
            </div>
            
        }    
            
        {                    
            cartList.map((el) =>(
                <div key={el.id} className="row">
                    <div className="col-md-8">
                        <h2> {el.title}</h2>
                        <p> Precio: $ {el.price}</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn-sm btn-danger"onClick={() => deleteOne(el.id)}>Eliminar</button>
                    </div>
                </div>
            ))
        }
            
            
        {
            (cartList.length >= 1)
            
            &&

            <div>
                <p> `Total de la compra: ${sumaTotal()}` </p>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
            </div>

        }     
        
        
        </div>
    )
}

export default CartWidget