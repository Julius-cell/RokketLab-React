import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Load from './Load';

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
  }, []);

  console.log(posts);

  return (
    <div className="App">
      {loading ? (
        <div>
          <Load/>
        </div>
      ) :
        (
          <div>
            {posts.map(post => {
              return (
                <div key={post.id}>
                  <h1>{post.owner.firstName} {post.owner.lastName}</h1>
                  <img src={post.owner.picture} alt=''/>
                </div>
              )
            })}
          </div>
        )}
    </div>
  )
}

export default Posts;