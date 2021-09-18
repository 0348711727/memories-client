import React, { useState, useEffect } from 'react';
import { Button, Typography, TextField, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from 'react-redux';      
import { createPost, updatePost } from "../actions/posts";
const Form = ({currentId, setCurrentId}) => {//currentId, setCurrentId, được truyền từ App.js
    const [postData, setPostData] = useState({
        creator: '', message: '', tags: '', selectedFile: '',
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch();
    // console.log(post)
    useEffect(()=>{
        if(post) setPostData(post)
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentId)//bắt đc currentId rồi
        if(currentId)
        {
            dispatch(updatePost(currentId, postData))
        }
        else
        {
            dispatch(createPost(postData))
        }
        clear();
    }
    const clear = () => {
        setPostData({creator: '', message: '', tags: '', selectedFile: ''})
        setCurrentId(null)
    }
    return (
        <div>
            <Paper className="paper">
                <form className="paper-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId ? 'Editing' : 'Create'} a Memory</Typography>
                    <TextField 
                        classes={{ root: 'paper-textfield' }}
                        variant="outlined" 
                        name="creator" 
                        fullWidth
                        label="Creator"
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData , creator: e.target.value })} />
                    <TextField 
                        variant="outlined" 
                        name="message" 
                        fullWidth
                        label="Message"
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData , message : e.target.value })} />
                    <TextField 
                        variant="outlined" 
                        name="tags" 
                        fullWidth
                        label="Tags"
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData , tags: e.target.value})} />
                    <div className="paper-file">
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/>
                    </div>
                    <Button className="paper-button" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </div>
    );
}
export default Form;