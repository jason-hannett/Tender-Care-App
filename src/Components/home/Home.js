import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {setPostInfo} from '../../redux/posts';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import Post from '../post/Post';
import axios from 'axios';
import camera from './instagram-camera-icon-png-image-free-download-searchpngcom-instagram-camera-png-2048_2048.png'
import './home.css';

function Home(props) {

  const [post, setPost] = useState('');
  const [image, setImage] = useState('');
  const [allPosts, setAllPosts] = useState([]);


  const addPost = () => {
    axios.post('/api/add-post', {post, image})
    .then(response => {
      const {post, image} = response.data
      props.setPostInfo(post, image)
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
        <div className='post-input-container'>
          <input 
            placeholder="What's new?" 
            type='text'
            onChange={event => setPost(event.target.value)}/>
          <button onClick={addPost}>Post</button>
          </div>
          <div className='post-camera-container'>
          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <section onChange={event => setPost(event.target.value)}>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img src={camera} height='30px'/>
                  </div>
                </section>
              )}
        </Dropzone>
          </div>
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
