import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {setPostInfo} from '../../redux/posts';
import {connect} from 'react-redux'
import Post from '../post/Post'
import axios from 'axios';
import './home.css';

function Home(props) {

  const [post, setPost] = useState('');
  const [allPosts, setAllPosts] = useState([]);


  const addPost = () => {
    axios.post('/api/add-post', {post})
    .then(response => {
      const {post} = response.data
      props.setPostInfo(post)
      getAllPosts()
      }) 
  }

  const getAllPosts = () => {
    axios.get('/api/get-all-posts')
    .then(response => setAllPosts(response.data))
  }

  useEffect(() => {getAllPosts()})
  
  console.log()
  const getPosts = allPosts.map((element, index) => {
    return <Post key={index} post={element}/>
  })
  return (
    <div className='home-container'>
      {props.user.user_id === 4 
      ? (<div className='home-post-container'>
          <input 
            placeholder="What's new?" 
            onChange={event => setPost(event.target.value)}/>
          <button onClick={addPost}>Post</button>
        </div>) 
        : (<></>)}
        
        <div className='home-feed-container'>
            {getPosts}
        </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
    
  return {
      user: reduxState.reducer,
      post: reduxState.posts
  }};

export default connect(mapStateToProps, {setPostInfo})(withRouter(Home))
