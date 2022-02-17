import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

//import  getItems from '../../helpers/getItems'
import { Loading } from '../Loading/Loading';
import Item from './Item'

function ItemListContainer( ){
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {idCategory} = useParams()
  
  useEffect(() => {
    
    async function getAll() {
      
      try {
        const db =  getFirestore()
        const queryCollection =  collection(db, 'productos')
        
        if( idCategory ) {
          const filterCategory = query(queryCollection, where('category', '==', idCategory))
          const response = await getDocs(filterCategory)
          //console.log(response)
          setProductos(response.docs.map( prod => ({ id: prod.id, ...prod.data() }) ));
          setLoading(false);

        } else {
          const response = await getDocs(queryCollection)
          //console.log(response)
          setProductos(response.docs.map( prod => ({ id: prod.id, ...prod.data() }) ));
          setLoading(false);
        }     
        
      } catch (error) {
        
      }
      
      
    
            
    }

    getAll();
    
      // getItems
      // .then((res) => setProductos(idCategory ? res.filter(prod => prod.category === idCategory ) : res ))
      // .catch((err) => console.error(`error: ${err}`))
      // .finally(()=> setloading(false))

  }, [idCategory])
  
  return(
    <div className="container">
    {
      ( loading  )
      
      ?

      ( <Loading/> ) 
      
      :

      <div className='container'>
        <h1 className="my-5 text-center">Juguetes</h1>

        <div className='row'>
        
          { productos.map((prod)=> 
              
              <div className='col-md-4 mb-5' key={prod.id}>
                <Item prod={prod} loading={loading}/>
              </div>
          
          )}
        
        </div>
      </div>
    }
  </div>
  )
   
}

export default ItemListContainer;