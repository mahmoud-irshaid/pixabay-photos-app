import './App.css';
import React, { useEffect, useState } from 'react';
import Photo from './components/photo';
import Search from './components/search';


const App = () => {

  const [photos, setphotos] = useState([]);
  const [search, setsearch] = useState('');
  const [query, setquery] = useState(' ')

  useEffect(() => {
    getPhotos();
  }, [query]);

  const getPhotos = async () => {
    const data = await fetch(`https://pixabay.com/api/?key=19238018-20cfad78874595d75b11f642a&q=${query}&image_type=photo&pretty=true`)
    const photosList = await data.json();
    setphotos(photosList.hits);
    console.log(photosList.hits)
  };

  const find =(e)=>{
    e.preventDefault();
    setquery(search)
    setsearch('')
  }
const changeSearch=e=>{
  setsearch(e.target.value)
}
  return (
    <React.Fragment>
    <Search find={find} changeSearch={changeSearch}/>
    <div className="container">
      {photos.map(photo => (
        <Photo
        photo={photo}
        key={photo.id}
        />
        
      ))}

    </div>
    </React.Fragment>
  );
}

export default App;
