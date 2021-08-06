import { Container, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import '../Boolgram.css';
import Stories from './Stories.js';
import Feed from './Feed.js'
import Sidebar from '../components/Sidebar/Sidebar.js'


function Main() 
{  
  return (
    <Grid container className='AppGridContainer'>
      <Grid item xs={8} className='GridMain'>
        <Container className='MainContainer' color='inherit'>
          <Toolbar className='MainToolbar'>
            <div>
              <Stories source='Stories'/>
              <Feed />
            </div>
          </Toolbar>
        </Container>
      </Grid>
      <Grid item xs = {2} className='GridSide'>
        <Container className='SideBarContainer' color='inherit'>
          <Toolbar className='SideBarToolbar'>
              <Sidebar />
          </Toolbar>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Main;