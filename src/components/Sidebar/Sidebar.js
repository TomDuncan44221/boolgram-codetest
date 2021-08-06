import React from 'react';
import {Paper} from '@material-ui/core/'
import Profile from './Profile'
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody'
import SidebarFooter from './SidebarFooter'

export default function Sidebar()
{
    return (
        <Paper>
            <Profile />
            <SidebarHeader />
            <SidebarBody />
            <SidebarFooter /> 
        </Paper>
    )
}