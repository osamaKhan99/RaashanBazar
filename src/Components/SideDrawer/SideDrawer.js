import React, { Fragment } from 'react';
import BackDrop from './BackDrop';

const sideDrawer = props => {
  let attachedClass = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClass = ['SideDrawer', 'Open'];
  }

  return (
    <Fragment>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClass.join(' ')} onClick={props.closed}>
        <nav>
          <ul className='NavigationItems'>
            <li className='NavigationItem'>
              <a href='https://www.demo.bitflex.app/login' className='btn'>
                My Dashboard
              </a>
            </li>
            <li className='NavigationItem'>
              <a href='#' className='btn'>
                Accounts
              </a>
            </li>
            <li className='NavigationItem'>
              <a href='#' className='btn'>
                Backup Link 1
              </a>
            </li>
            <li className='NavigationItem'>
              <a href='#' className='btn'>
                Backup Link 2
              </a>
            </li>
            <li className='NavigationItem'>
              <a
                href='https://etherscan.io/address/0x167cb3f2446f829eb327344b66e271d1a7efec9a'
                className='btn'
              >
                Verified & Audited Contract
              </a>
            </li>
            <li className='NavigationItem'>
              <a href='https://discord.com/invite/2JYfAvm' className='btn'>
                Discord
              </a>
            </li>
            <li className='NavigationItem'>
              <a href='https://t.me/BitFlexCHAT' className='btn'>
                Telegram
              </a>
            </li>
            <li className='NavigationItem'>
              <a href='https://twitter.com/BitFleXCrypto' className='btn'>
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
