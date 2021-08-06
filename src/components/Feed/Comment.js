import React from 'react';

export default function Comment(props)
{
    return(
        <div>
            {props.name}: {props.comment}
        </div>
    )
}