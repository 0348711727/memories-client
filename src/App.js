import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./public/memories.png";
import Posts from './posts/Posts';
import Form from "./Form/Form";
import "./styleApp.css";
import { useDispatch } from "react-redux"
import { useEffect, useState } from 'react';
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();

  const[currentId, setCurrentId] = useState(null);
  // console.log(currentId)
  
  useEffect(() =>{
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <>
    <Container maxWidth="lg">
        <AppBar className="appBar" position="static" color="inherit">
            <Typography className="heading" varaint="h2" align="center">Memories</Typography>
            <img className="navBarImg" src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
          <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12}  sm={7}>
                      <Posts setCurrentId={setCurrentId}/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <Form currentId={currentId} setCurrentId={setCurrentId}/>
                  </Grid>
              </Grid>
        </Container>
      </Grow>
    </Container>
    </>
  );
}

export default App;
