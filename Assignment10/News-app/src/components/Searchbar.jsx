import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews,searchNews} from '../redux/slice/newsSlice.js';

import '../App.jsx'
const Searchbar = () => {
  const {search} = useSelector((state)=>state);

  const [searchQuery,setSearchQuery]= useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(searchNews(searchQuery))
  },[])
  const handleSearch =(e)=>{
    e.preventDefault();
    console.log(searchQuery)
    dispatch(searchNews(searchQuery))
  }
  return (
    <div>
         <form className="d-flex">
          <input
            className="form-control py-1 px-2 m-1"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}
          className="btn btn-primary py-1 py-2 m-1" 
          type="submit">
            Search
          </button>
          
        </form>
    </div>
  )
}

export default Searchbar