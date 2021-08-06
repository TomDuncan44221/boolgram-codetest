import { Paper, Toolbar } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Story from '../components/Stories/story.js';
import Suggested from '../components/Sidebar/Suggested'
import {Skeleton} from '@material-ui/lab' // Oooo, spooky - it's from the lab so it's bare bones! Aren't I humerus? 

function truncate(input) {
    if (input.length > 9) {
       return input.substring(0, 7) + '...';
    }
    return input;
 };


export default function Stories(props) 
{
    const [storiesState, setStoriesState] = useState([]);
    const [isLoading, setIsLoading] = useState(0);
    // const [storyCount, setStoryCount] = useState(0);

    useEffect(() => 
    {
        fetch( 'https://flynn.boolean.careers/exercises/api/boolgram/profiles', // Link to API
        {
        method: 'GET',
        headers: 
            {
                'Content-Type': 'application/json',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' // Accept from API docs
            },
        })
        .then(res => res.json())
        .then(response => 
        {
            setStoriesState(response);
            setIsLoading(false);  // Set this to true to test the skeleton out, handy for styling!
        })
        .catch(error => console.log(error));
    }, []);

    if (props.source === 'Stories')
    {
        return (
            <Paper className='Stories' elevation={3}>
                {
                    isLoading ? <Skeleton className='StorySkeleton' /> :  
                    <Toolbar className='StoryToolbar'>
                        {storiesState.map((c, index) => (
                            <Story className='Story' name={truncate(c.profile_name)} image={c.profile_picture} key={index}/>
                        ))}
                    </Toolbar>
                }   
            </Paper>
        )
    } else if (props.source === 'Sidebar')
    {
        return (

            <div>
                {
                    isLoading ? <Skeleton className='SuggestedSkeleton'> <Suggested /> </Skeleton> : 
                    <div>
                    {
                        storiesState.map((c, index) => (
                        <Suggested className='Suggested' name={c.profile_name} image={c.profile_picture} key={index}/>))
                    }
                    </div>
                } 
            </div>
            
        )
    } else 
    {
        console.log('Bad Request, internal routing fault --- From Stories.js')
        return (
            <div></div>
        )
    }

}