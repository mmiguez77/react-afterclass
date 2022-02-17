import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import ItemDetail from "./ItemDetail";
import { Loading } from "../Loading/Loading";
//import getItems from "../../helpers/getItems"  


function ItemDetailContainer(){
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const {productId} = useParams();


   useEffect(() => {

    async function getById() {

      try {
        const db = getFirestore();
        const item = doc(db, 'productos' , productId);
        const response = await getDoc(item)
        //console.log(data)
        setProducto( { id: response.id, ...response.data()} );
        setLoading(false);
      } catch (error) {
        /* Manejo de Errores */
      }
      
    }

    getById();
    // getItems
    //   .then((res) => setProducto(res.find(prod => prod.id === productId )))
    //   .catch((err) => console.log(err))      
    //   .finally(()=> setLoading(false))
  }, [productId]);

   return(
       <>
        {
         loading  
        
        ? 
        
        <Loading/>
        
        : 

        <ItemDetail 
          prod={producto} 
          key={producto.id} 
          loading={loading} 
          setLoading= {() => {setLoading()}}  />
        }
      </>

   )

}


export default ItemDetailContainer