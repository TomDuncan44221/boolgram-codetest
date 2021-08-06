import IconButton from '@material-ui/core/IconButton';
import { Button, Container, Typography } from '@material-ui/core';

export default function Story(props)
{
    return (
        <Container>
            <IconButton className='SuggestedContainer'>
            <img src={props.image} className='Suggested' alt='Profile'/> 
            </IconButton>
            <Typography className='Link'>
                {props.name}
            </Typography>
            <Button>
                Follow
            </Button>
        </Container>
    )
}