import React from 'react';
import classes from './Users.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    pages.map(page =>
      <span
        className={currentPage === page && classes.selectedPage}
        onClick={() => { onPageChanged(page) }}>
        {page}
      </span>)
  )
}

export default Paginator;

