import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Load from './Load';
import './styles/Post.css';

const BASE_URL = 'https:///dummyapi.io/data/api';
const APP_ID = '5f89ad874b170676253c0837';

// Recibe el nombre del Tag seleccionado en 'Home'
// Genera una petición de todos los Posts de dicho tag
const Posts = ({ match }) => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    // console.log(match.params.id);
    setLoading(true);
    axios.get(`${BASE_URL}/tag/${match.params.id}/post?limit=10`, { headers: { 'app-id': APP_ID } })
      .then(data => setPosts(data.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(posts);

  return (
    <div className="App">
      {loading ? (
        <div>
          <Load />
        </div>
      ) :
        (
          <div className="posts">
            {posts.map(post => {
              return (
                <div key={post.id} className="card">



                  <div className="card-image">
                    <img src={post.image} alt="" />
                  </div>



                  <div className="card-text">

                    <span className="tag">
                      {post.tags.map((tag, i = 0) => {
                        i++;
                        return (<p key={i}>{tag}</p>)
                      })}
                    </span>
                    <div className="user">
                      <div className="banner_holder">
                        <img id="user_image" src={post.owner.picture} alt="" />
                      </div>
                      <div className="info_holder">
                        <p>{post.owner.firstName} {post.owner.lastName}</p>
                        <p>{post.owner.email}</p>
                      </div>
                    </div>
                    <div className="user_text">
                      <p>{post.text}</p>
                    </div>


                  </div>





                  <div className="card-stats">
                    <div className="stat">
                      <div className="value">
                        <ion-icon name="heart"></ion-icon>
                      </div>
                      <div className="type">{post.likes}</div>
                    </div>

                    <div className="stat border">
                      <div className="value">10-10-2020</div>
                      <div className="type">Date</div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        )}
    </div>
  )
};

export default Posts;