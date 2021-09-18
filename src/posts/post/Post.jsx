import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core"
import {ThumbUpAlt, Delete, MoreHoriz, ClassRounded} from "@material-ui/icons";
import moment from 'moment';
import "./post.css";
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from "../../actions/posts";

const Post = (props) => {
    const {post, setCurrentId} = props;
    const dispatch = useDispatch();
    return (
        <div className="posts">
            <div className="container">
                <Card key={post._id} className="post">
                    <div className="postCreator">
                        <Typography>{post.creator}</Typography>
                        <Typography className="postTime">{moment(post.createdAt).fromNow()}</Typography>
                    </div>

                    {/* <img src={post.selectedFile} alt="" className="postImg"/> */}

                    <CardMedia image={post.selectedFile} component="img" className="postImg"/>{/* component="img quan trọng vì mặc định nó là media" */}
                
                    <div className="postDetail">
                        <Button style={{color: 'white'}} size="small" onClick={()=>setCurrentId(post._id)}>
                            <MoreHoriz fontSize="medium" />
                        </Button>
                    </div>

                    <div >
                        <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
                    </div>
                    <CardContent>
                        {/* <Typography varaint="h5" gutterBottom>{post.message}</Typography> */}
                        <h3>{post.message}</h3>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => dispatch(likePost(post._id))} color="primary">
                            <ThumbUpAlt fontSize="medium"/>
                            &nbsp; Like
                            &nbsp; {post.likeCount} &nbsp;
                        </Button>                
                        <Button size="small" onClick={() => dispatch(deletePost(post._id))} color="primary">
                            <Delete fontSize="small"/>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Post;