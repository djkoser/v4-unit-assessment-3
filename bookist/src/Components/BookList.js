import React from 'react'; 
//books state and addToShelf(id)
export default function BookList (props) {
  let bookRender = props.books.map(e=>(
    <figure>
      <img onClick ={event=>props.addToShelf(event.target.attributes.id.value)} width='200px' id={e.id} alt={e.title} src={e.img}></img>
      <figcaption>{e.title}</figcaption>
      <figcaption>{e.author}</figcaption> 
    </figure>))

  return (
    <div className = 'bookList'>
      {bookRender}
    </div>
  )
};