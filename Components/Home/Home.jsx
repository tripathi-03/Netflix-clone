import React, { useEffect } from 'react'
import "./Home.scss"
import axios from 'axios'
import { useState } from 'react';
const api = "da8c037e7188cc9ef08e02cfb1076bb5";
const url = "https://api.themoviedb.org/3";
const imgurl ="https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const popular = "popular";
const nowplaying = "now_playing";
const topRated = "top_rated";

const Card = ({img})=>(
  <img className ="Card" src={img} alt="cover" />
)

const Row = ({title,arr=[]})=>(
  <div className='Row'> 
    <h2>{title}</h2>
      <div>
         {
           arr.map((item,index) => (
            <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
          ))   
         }    

      </div>
  </div>
)

const Home = () => {
   const [upcomingMovies,setupcomingMovies] = useState([]);
   const [nowplayingmovies,setnowplayingmovies] = useState([]);
   const [popularmovies,setpopularmovies] = useState([]);
   const [topRatedmovie,settopRatedmovie] = useState([]);
  

  useEffect(()=>{

    const fetchUpcoming = async()=>{
     const {data: {results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${api}`)
     setupcomingMovies(results);
    };

    const fetchNowPlaying = async()=>{
     const {data: {results}}= await axios.get(`${url}/movie/${nowplaying}?api_key=${api}`)
     setnowplayingmovies(results);
    };

    const fetchPopular = async()=>{
     const {data: {results}}= await axios.get(`${url}/movie/${popular}?api_key=${api}`)
     setpopularmovies(results);
    };

    const fetchTopRated = async()=>{
     const {data: {results}}= await axios.get(`${url}/movie/${topRated}?api_key=${api}`)
     settopRatedmovie(results);
    };


    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    
},[])



  return (
   <section className="home">
    <div className="banner" style={{
      backgroundImage : popularmovies[0]?`url(${`${imgurl}/${popularmovies[0].poster_path}`})`:"rgb(16,16,16)"
    }}></div>

    <Row title={"Upcoming"} arr={upcomingMovies}/>
    <Row title={"Now Playing"} arr={nowplayingmovies}/>
    <Row title={"Popular"} arr={popularmovies}/>
    <Row title={"Top Rated"} arr={topRatedmovie}/>
   </section>
  )
}

export default Home