import React, {Component} from 'react'; 
//shelf state, clear shelf 
export default class Shelf extends Component {
  constructor (props){
    super(props)
  }
  render () {
    let shelfRender = this.props.shelfProp.map(book=> (<li key={book.id}>{book.title}</li>))
    return (
      <div className='shelf'>
      <button onClick={this.props.clearShelf}>Clear Shelf</button>
      <ul className ='shelfList'>
        {shelfRender}
      </ul>
    </div>
    )
  }
};