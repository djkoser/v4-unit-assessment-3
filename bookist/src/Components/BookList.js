import React, {Component} from 'react'; 
//books state and addToShelf(id)
export default class BookList extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render () {
    let bookRender = this.props.books.map(e=>(
    <figure onClick ={event=>this.props.addToShelf(event.target.attributes.id)}>
      <img id={e.id} alt={e.title} src={e.img} width='150px'></img>
      <figcaption>{e.title}</figcaption>
    </figure>))
    return (
      <div className = 'bookList'>
        {bookRender}
      </div>
    )
  };
} 