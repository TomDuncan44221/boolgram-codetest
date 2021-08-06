import React from 'react';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, IconButton, Toolbar, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Favourite from '../Header/subcomponents/icons/favourite.js';
import Comment from '@material-ui/icons/ChatBubbleOutline';
import Likes from './Likes';
import Comments from './Comments'
import Date from './Date.js'
import AddComment from './AddComment.js'


export default function Post(props) 
{
    return (
        <Card className='Post'>
            <CardHeader
                className='CardHeader' 
                avatar={<img src={props.profileImage} className='profile'/>}
                title={props.fullName}
                action=
                {
                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                }
            />
                <CardActionArea>
                    <CardMedia className='PostImage' image={props.image} title={props.title}/>
                    </CardActionArea>
                <CardContent className='CardFooter'>
                    <Toolbar>
                        <IconButton>
                            <Favourite />
                        </IconButton>
                        <IconButton>
                            <Comment />
                        </IconButton>
                        <Date className='Date' date={props.date} />
                    </Toolbar>
                    {props.likes.length ? <Likes likes={props.likes}/>: <div></div> }
                    <Typography className='caption'>
                        {props.username}: {props.caption} 
                    </Typography>
                    {props.comments.length ? <Comments comments={props.comments}/>: <div></div> } 
                </CardContent>

            <AddComment />
        </Card>
        
    )
}
