import axios from 'axios';

const url = 'http://localhost:5000/api/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);