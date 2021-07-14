import React, { useState } from "react";
import { SHbutton } from './S_H_button.js';
import ReactPaginate from 'react-paginate';

export const MovieListing  = (props) => {

const [users, setUsers] = useState(props.listing);

const [pageNumber, setPageNumber] = useState(0);
const usersPerPage = 3;
const pagesVisited = pageNumber * usersPerPage;

  /* */

const displayUsers = users
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((props, index) => {
   
    const Details = () => {
      return(
        <div>
        <p>Year = {props.Year}</p>
        <p>ID = {props.imdbID}</p>
        <p>Type = {props.Type}</p>
        </div>
        );}

    return (
          <div className = 'multi_container'>
          <div className = 'multiMovieList'>  
          <img src={props.Poster} alt = {props.Title} />
          <p><strong>{props.Title} </strong></p>
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
   <div>
    {displayUsers}
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