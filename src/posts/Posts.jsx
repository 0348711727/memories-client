import React from 'react';
import Post from './post/Post';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=>state.posts) //state đầu là state global của redux, state.posts là từ combineReducer({posts})
    // console.log(posts);
    return (
        !posts.length ? 'No Post in feed now. Create one' : (
            <div className="posts" style={{display: 'flex'}}>
                <Grid align="stretch">
                    {posts.map((post) => (
                        <Container>
                            <Grid key={post._id} item xs={12} sm={6}>
                                <Post post={post} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Container>
                    ))}
                </Grid>
            </div>
        )
    );
}

export default Posts;