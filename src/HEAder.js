import React from "react";
import "./HEAder.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
function Header() {  
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      

    <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img className="header__searchIcon" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png "/>
      </div>

      <div className="header__nav">
        
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest': user.email}</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
         <div className="header__optionBasket">
          
          <img className="basketIcon" src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg"/>
          <span className="header__optionLineTwoheader__basketCount">
          {basket?.length}
            </span>
          
          </div>
          </Link>
      </div>
    </div>
  );
}

export default Header;