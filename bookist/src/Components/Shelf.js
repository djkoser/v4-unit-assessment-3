import React from 'react'; 
//shelf state, clear shelf 
export default function Shelf (props) {
  let shelfRender = []; 
  let shelfClear;
  if (props.shelfProp.length ===0) {
    shelfRender = (<div>Click on the book covers to add them to your bookshelf below!</div>);
  } else {
    shelfRender = props.shelfProp.map(book=> (<li key={book.id}>{book.title}</li>));
    shelfClear = <button className ='shelfButton' onClick={props.clearShelf}>Clear Shelf</button>
  };
  return (
    <div className='shelf'>
      <h2>Your Shelf</h2>
      {shelfClear}
      <ul className ='shelfList'>
        {shelfRender}
      </ul>
  </div>
  )
};