import { FETCH_ALL, UPDATE_POST, CREATE_POST, DELETE_POST } from "../constants/actionTypes";
export default function (posts = [], action){
    switch (action.type) {
        case FETCH_ALL:
            return action.payload; //dispatch data từ action, action.payload tương đương như posts;
        case UPDATE_POST: //case LIKEPOST cũng giống UPDATE lên gộp chung lại
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post) 
        case CREATE_POST:
            return [...posts, action.payload];
        case DELETE_POST:
            return posts.filter((post)=> post._id !== action.payload)
        default:
            return posts;
    }
}
