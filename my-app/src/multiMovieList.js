/*import React, { Component } from "react";*/
import { SHbutton } from './S_H_button.js';

export const MovieListing  = (props) => {

  //const { Title, Rated, Runtime, Genre, Plot, Actors, imdbRating } = movie;

  return props.listing.map((props, index) => {

    const Details = () => {
      return(
        <div>
        <p>Year = {props.Year}</p>
        <p>ID = {props.imdbID}</p>
        <p>Type = {props.Type}</p>
        </div>
        );
    }


    return (
    <div className = 'multi_container'>
      <div className = 'multiMovieList'>  
      <img src={props.Poster} alt = {props.Title} />
      <p><strong>{props.Title} </strong></p>
      <div className='Wapper_tag'>

        <SHbutton Details = {Details} />
      </div>
    </div>
    </div>
      );
   
    } 
  );
}