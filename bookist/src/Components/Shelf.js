import React from 'react'; 
//shelf state
export default function Shelf (props) {
  let shelfRender = props.shelf.map(e=> (<li key={e.id}>{e.title}</li>))
  return (
    <div className='shelf'>
      <button onClick={props.clearShelf}>Clear Shelf</button>
      <ul className ='shelfList'>
        {shelfRender}
      </ul>
    </div>
  )
};