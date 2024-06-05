import React, { useState } from "react";

const SearchMovie =() =>{
    const [search,setSearch]= useState("");

    const handleSearch =(event)=>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    return (
        <div className="d-flex p-0 m-1">
            <input
                className="m-1 search-input"
                id="moviename"
                type="text"
                placeholder="Enter movie name"
                value={search}
                onChange={handleSearch}
            />
            <button 
            onClick={()=>{setSearch(search)}}
            className="btn btn-primary m-1" 
            id="search">
                Search
            </button>
        </div>
    );
}

export default SearchMovie;
