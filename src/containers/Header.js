import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import Searchbar from '../components/Header/subcomponents/Searchbar.js';
import Logo from '../components/Header/subcomponents/Logo.js';
import Icons from '../components/Header/subcomponents/Icon.js';

function Header() 
{
    return (
      <AppBar className ='Header' color='inherit'>
        <Toolbar className='HeaderToolbar'> 
          <Logo />
          <Searchbar/>
          <Icons/>
        </Toolbar>
      </AppBar>
    );
};

export default Header;
