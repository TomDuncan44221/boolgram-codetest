import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import Comment from './Comment'

export default function Comments(props)
{
    const [isExpanded, setExpanded] = useState(0);
    return(
        <div>
            {
                props.comments.length > 3 ?
                <Button onClick={() => setExpanded(true)}>
                    Show all {props.comments.length} comments
                </Button>: <div></div> 
            }
            {
                props.comments.map((c, index) => 
                (
                    (isExpanded == false && index < 3) || isExpanded == true ?
                        <Comment className='Comment' name={c.username} comment={c.text} key={index}/>: <div></div>

                ))
            }

        </div>      
)}