import { useState } from 'react'

function ItemCount ( { stock, initial, onAdd } ) {
    
    const [count, setCount] = useState(initial)
     
     function handleIncrease() {
         if (count < stock){
             setCount(count + 1)
         }
     }

     function handleDecrease() {
         if(count > initial ){
             setCount(count - 1)
         }       
     }

     const add = () => {
        onAdd(count)
    }
    
 
     return(
         <div className="container">
            <div className="row">
                <div className="col-1">

                <div className="row">
                    <div className="d-flex justify-content-around col-1">
                        <button className="btn-sm btn-success" onClick={ handleDecrease }> - </button>
                            <span className="mx-5"> { count } </span>                        
                        <button className="btn-sm btn-success" onClick={ handleIncrease }> + </button>
                    </div>
                        
                 
                    <div className="mt-5 col-1">
                        <button className="btn btn-outline-success" onClick={add}> Agregar al carrito </button>
                    </div>
                </div>
                    

                </div>
            </div>
         </div>
     )
 }


export default ItemCount;