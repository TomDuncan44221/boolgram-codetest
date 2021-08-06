import { Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export default function Likes(props)
{
    return(
        <Toolbar>
            <img src={props.likes[0].profile_picture} className='LikesProfile' alt='Profile Image'/>

            <Typography className='LikesText'>
                Liked by {props.likes[0].username} & {props.likes.length-1} others
            </Typography>
        </Toolbar>
    )
}