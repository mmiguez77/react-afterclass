import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export function useCartContext(){ return useContext(CartContext)}

export function CartContextProvider({ children }){
    
    const [cartList, setCartList] = useState([]);

    console.log(cartList)
    function agregarAlCarrito(item){
        
        if(avoidDuplicates(item)){
        
            const changeAmount = [...cartList]

                changeAmount.forEach(x =>{
                if(x.id === item.id){
                    x.cantidad += item.cantidad
                }
            })
            
            return setCartList(changeAmount)
        }
       
        return setCartList([...cartList, item])
    }

    function emptyCart(){
        setCartList([])
    }

    const  avoidDuplicates = (parametro) => {
        
        const findCharacter = cartList.some((i)=>{
            return i.id === parametro.id
        })
        
        return findCharacter
    }

    const deleteOne = (id) => {
        setCartList(cartList.filter(x => x.id !== id))  
    }

    const sumaTotal = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0)
    }

    const cantidad = () => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    } 

    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne,
        sumaTotal,
        cantidad
    }}>
        { children }
    </CartContext.Provider>
}
