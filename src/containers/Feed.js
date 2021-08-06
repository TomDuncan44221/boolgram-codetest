import { Paper, Toolbar } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Post from '../components/Feed/Post.js';
import {Skeleton} from '@material-ui/lab';
import Spinner from '../assets/spinner.gif'


export default function Feed() 
{
    const [feedState, setFeedState] = useState([]);
    const [isLoading, setIsLoading] = useState(0);
    // const [feedCount, setFeedCount] = useState(0);

    useEffect(() => 
    {
        fetch( 'https://flynn.boolean.careers/exercises/api/boolgram/posts', // Link to API
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
            setFeedState(response);
            setIsLoading(false); // Set this to true to test out the skeleton! 
        })
        .catch(error => console.log(error));
    }, []);

   
    return (
        <div className='Feed'>
            {
                isLoading ? <Skeleton variant='circle' className='FeedSkeleton' /> :
                <div>
                    {feedState.map((c, index) => (
                        <Post 
                        profileImage={c.profile_picture} 
                        fullName={c.profile_fullname}
                        image={c.post_image} 
                        title={c.post_text} 
                        caption={c.post_text} 
                        likes={c.likes}
                        username={c.profile_name}
                        comments={c.comments}
                        date={c.date.date}
                        key={index}
                        />
                    ))}
                </div>
            }
        </div>
    )
}