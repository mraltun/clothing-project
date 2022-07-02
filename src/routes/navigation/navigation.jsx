import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import { signOutUser } from "../../utils/firebase/firebase";
// CRA uses SVGR so we can import SVG as component
import { ReactComponent as MainLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <MainLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          {/* Check state in context if the user logged in then render the correct link  */}
          {currentUser ? (
            <NavLink as='span' className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className='nav-link' to='/auth'>
              SING IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
