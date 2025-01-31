import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const UserCartContext =()=> useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setcartList] = useState([])
    const [total,setTotal] = useState(0)


    //function para agregar al carrito
    const addToCart = (item)=>{
        setcartList([
            ...cartList,
            item
        ])
    }

    const reemplazarValor = (veces,i,valor2)=>{
        cartList[i].cantidad=cartList[i].cantidad*veces
        cartList[i].valor = cartList[i].valor+valor2
    }
    const eliminar = ()=>{
        setcartList([])
        setTotal(0)
    }
    // funcion para calcular el total
    const calcularTotal = (precio)=>{
        setTotal(precio)
    }
    return (

        
        <CartContext.Provider value={{
            addToCart,
            reemplazarValor,
            total,
            eliminar,
            calcularTotal,
            cartList
        }}>  
            {children}
        
        </CartContext.Provider>
   
)
}

export default CartContextProvider