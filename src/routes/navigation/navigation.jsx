import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user";
import { signOutUser } from "../../utils/firebase/firebase";
// CRA uses SVGR so we can import SVG as component
import { ReactComponent as MainLogo } from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // Use signOutUser from firebase and update the context state to null. If you don't state will be undefined
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {/* Check state in context if the user logged in and render correct link  */}
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SING IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
