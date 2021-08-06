import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import '../../../Boolgram.css';
import Profile from './icons/profile';
import Favourite from './icons/favourite';
import Home from './icons/home';


export default function Icons() {

  return (
        <Toolbar className='IconToolbar'>
          <IconButton edge='start' className={'Icon'} color='inherit' aria-label='menu'>
            <Favourite />
          </IconButton>
          <IconButton className={'Icon'} color='inherit' aria-label='menu'>
            <Home />
          </IconButton>
          <IconButton edge='end' className={'Icon'} color='inherit' aria-label='menu'>
            <Profile />
          </IconButton>
        </Toolbar>
  );
}