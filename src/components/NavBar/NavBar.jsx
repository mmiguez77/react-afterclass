import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


const  Navbar= ()=>{
    
  const { cantidad, cartList } = useCartContext()

return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "20px"  }}>
      
      <div className="mx-5">
        <Link to='/' className="navbar-brand">
          Tienda de Juguetes
        </Link>
      </div>
  
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mx-5" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item mx-3">
            <Link to='/category/muñecas' className="nav-link" >
              Muñecas
            </Link>
          </li>
          
          <li className="nav-item mx-3">
            <Link to='/category/pelotas' className="nav-link" >
              Pelotas
            </Link>
          </li>

          <li className="nav-item mx-3">
            <Link to='/category/autos' className="nav-link" >
              Autos
            </Link>
          </li>
        
        </ul>
      </div>

          <Link to='/cart'>
            <img src="/img/bagicon.png" alt="Icono Bolsa" />
          </Link>
            { cartList.length > 0 && cantidad()}


      
</nav>
)
}

export default Navbar;