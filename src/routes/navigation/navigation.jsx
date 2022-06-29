import { Outlet, Link } from "react-router-dom";
// CRA uses SVGR so we can import SVG as component
import { ReactComponent as MainLogo } from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
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
          <Link className='nav-link' to='/auth'>
            SING IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
