import React, { Fragment, useState } from 'react';
import DrawerToggle from './SideDrawer/DrawerToggle';
import SideDrawer from './SideDrawer/SideDrawer';

const Navbar = () => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const openSide = () => {
    return setSideDrawer(!sideDrawer);
  };
  return (
    <Fragment>
      <nav className='navbar'>
        <div>
          <h1 className='product__title' style={{ padding: '10px' }}>
            <a className='btn' onClick={openSide}>
              MENU
            </a>
          </h1>
        </div>
      </nav>
      <SideDrawer closed={openSide} open={sideDrawer} />
    </Fragment>
  );
};

export default Navbar;
