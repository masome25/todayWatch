

import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState, useContext } from 'react';
import Movie from './items/Movie';
import Tv from './items/Tv';
import People from './items/People';
import { UserContext } from './UserContext';


function SearchBox() {

  const[txt, setTxt]=useState('')
  const[resultSearch, setResultSearch]=useState([])
  const {apiKey, baseUrl} = useContext(UserContext)
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (txt) {
        const {data} = await axios.get( `${baseUrl}/search/multi?api_key=${apiKey}&query=${txt}`) 
        setResultSearch(data.results);
      } else {
        setResultSearch([]);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [txt]);

  function showItems(item) {
    console.log(item)
      switch (item.media_type)
      {
        case 'movie' :
           return <Movie  item={item} />
        case 'tv' : 
           return <Tv  item={item} />
        case 'person' : 
           return <People  item={item} />
      }}

  return (
    <>
         <i className="fa fa-search" ></i>
         <input 
         type='search' 
         placeholder='Search for a movie, tv show, person...' 
         value={txt} 
         onChange={ e => setTxt(e.target.value) } 
          />
          <div className={`searchBoxInfo ${ resultSearch.length && txt ? 'show' : 'noShow' }`}>
          {
            resultSearch.map( res => {
                 return (
                    <div onClick={()=>{setTxt('')}} >
                        {showItems(res)}
                    </div>
                 )
            })
          }  
          </div>
    </>
  )
}

export default SearchBox