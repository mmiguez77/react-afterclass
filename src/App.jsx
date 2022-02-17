import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import {CartContextProvider} from './context/CartContext';

function App() {
 
  return (
    <BrowserRouter>
      <CartContextProvider>
        
            <Navbar/>
        <div className="container">
            <Routes>

              <Route exact path='/' element={<ItemListContainer/>}/>
              <Route exact path='/cart' element={<CartWidget/>}/>
              <Route exact path='/details/:productId' element={<ItemDetailContainer/>}/>
              <Route exact path='/category/:idCategory' element={<ItemListContainer/>}/>

            </Routes>
        </div>

      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;