
import IconButton from '@material-ui/core/IconButton';
import { Container, Typography } from '@material-ui/core';

export default function Story(props)
{
    
    return (
        <Container>
            <IconButton className='StoryContainer'>
            <img src={props.image} className='Story' alt='Profile'/> 
            </IconButton>
            <Typography className='Link'>
                {props.name}
            </Typography>
        </Container>
    )
}