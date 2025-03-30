import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { getMoives } from "../services/GetService";

const Movie = () => {
  const [data, setData] = useState([]);
  const [noResults, setNoResults] = useState(false)
  const [searchMoive, setSearchMoive] = useState("");
  const handleSearch = () => {
    if(searchMoive.trim()){
        getMovieData(searchMoive)
    }
  };
  const getMovieData = async (searchQuery) => {
    try {
      const res = await getMoives(searchQuery);
      if(res.data.Error){
        setNoResults(true)
        setData([])
      }else{

          setNoResults(false)
          setData(res.data.Search || []);
      }
      
    } catch (error) {
      console.log(error.message);
      console.log(error.response.status);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <div className="search-container">
        <input
          value={searchMoive}
          onChange={(e) => setSearchMoive(e.target.value)}
          type="text"
          placeholder="Search movies..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {
        noResults && <div>No Results found try different movie name</div>
      }
      <ul>
        {data.map((elem, idx) => (
          <Card
            title={elem.Title}
            posterUrl={elem.Poster}
            imdbID={elem.imdbID}
            year={elem.Year}
            key={elem.imdbID}
          />
        ))}
      </ul>
    </div>
  );
};

export default Movie;
