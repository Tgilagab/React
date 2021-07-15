import React, { useState } from "react";
import { SHbutton } from './S_H_button.js';
import ReactPaginate from 'react-paginate';

export const MovieListing  = (props) => {

// useState for paging state
const [users, setUsers] = useState(props.listing);
const [pageNumber, setPageNumber] = useState(0);
const usersPerPage = 3;
const pagesVisited = pageNumber * usersPerPage;

//searchbar state
const [input, setInput] = useState ("");
  /* */

const displayUsers = users.filter((val) =>{
  if (input == ""){
    return val;
  }else if (val.Title.toLowerCase().includes(input.toLowerCase())){
    return val;

     }

  }).slice(pagesVisited, pagesVisited + usersPerPage)
  .map((val , index) => {
   
    const Details = () => {
      return(
        <div>
        <p>Year = {val.Year}</p>
        <p>ID = {val.imdbID}</p>
        <p>Type = {val.Type}</p>
        </div>
        );}

    return (
          <div className = 'multi_container'>
          <div className = 'multiMovieList'> 

          <img src={val.Poster} alt = {props.Title} />
          <p><strong>{val.Title} </strong></p>
          <div className='Wapper_tag'>

          <SHbutton Details = {Details} />
          </div>
          </div>
          </div>) });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return(
   <div className = 'wapper'>
    <input type="text" placeholder = ".... Search Batman Movie Title .... " onChange = {event => {setInput(event.target.value)}}/>
    <div>{displayUsers}</div>
    <ReactPaginate 
      previousLable = {"Previous"}
      nextLable = {"Next"}
      pageCount = {pageCount}
      onPageChange = {changePage}
      containerClassName = {"paginationBttns"}
      PreviousLinkClassName = {"previousBttn"}
      nextLinkClassName = {"nextBttn"}
      disabledClassName = {"paginationDisabled"}
      activeClasssName = {"paginationActive"}
    />
   </div>
  );
  
  }