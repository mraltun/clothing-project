import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon";
import { UserContext } from "../../context/user";
import { signOutUser } from "../../utils/firebase/firebase";
// CRA uses SVGR so we can import SVG as component
import { ReactComponent as MainLogo } from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <MainLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {/* Check state in context if the user logged in then render the correct link  */}
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SING IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
