import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Load from './Load';
import SearchBar from './SearchBar';

// Me muestra los Tags en pantalla para seleccionar alguno || Barra de búsqueda de Tags
const Home = () => {

  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');

  const addTag = (tag) => {
    setLoading(true);
    setTag(tag);
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <div>
          <Load />
        </div>
      ) :
        (
          <div>
            <SearchBar addTag={addTag} />
            {tag ? (
              <div>
                <Redirect to={'/posts/' + tag}/>
              </div>
            ) : (
              <Redirect to={'/'}/>
            )}
          </div>
       
        )}
    </div>
  )
};

export default Home;