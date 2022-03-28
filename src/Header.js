import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvide';
import { auth } from './Firebase';
export default function Header() {  
  const [{cart,user},dispatch]=useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }


  return (
    <div className='header'>
      <Link to="/">
        <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='/'/>
        </Link>
        <div className='header__search'>
<input className='header__searchInput' type="text"/>
<SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
        <Link to={!user && "/Login"}>
            <div  onClick={handleAuthentication} className='header__option'>
                <span className='header__optionLineOne'>hello {!user? 'Guest':user.email}</span>
               
                <span className='header__optionLineTwo'>{user?'sign out':"sign in"}</span>
    </div>               
     </Link>
    <div className='header__option'>
                <span className='header__optionLineOne'>return</span>
                <span className='header__optionLineTwo'> & others</span>
    </div>
    <div className='header__option'>
                <span className='header__optionLineOne'>your</span>
                <span className='header__optionLineTwo'>prime</span>
    </div>
    <Link to="/Checkout">
    <div className='header__optionBasket'> 
     <ShoppingCartOutlinedIcon  className='ShoppingCartOutlinedIcon'/>
        <span className='header__optionLineTwo header__basketCount'>{cart.length}</span>
    </div>   
      </Link>

        </div>
    </div>
  )
}
