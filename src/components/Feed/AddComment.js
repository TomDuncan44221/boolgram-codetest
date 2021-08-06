import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function AddComment()
{
    return (
        <TextField className='addCommentBox' label='Write a comment' variant='outlined' fullWidth />
    )
}