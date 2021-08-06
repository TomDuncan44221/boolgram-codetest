import { Button, Typography, Toolbar, Container } from '@material-ui/core';
import Profile from '../../assets/profile.jpg';

export default function profile() 
{
   return (
       <Container className='SidebarContainer'>
        <Toolbar className="ProfileToolbar">
            <img src={Profile} className='Profile' alt="Oh how I wish, I was Jan Egeland"/>
            <Typography className='ProfileText'>
                Tom Duncan
            </Typography>
            <Button className='ProfileSwitch'>
                Switch
            </Button>
        </Toolbar>
        </Container>

   )
}