import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar'; 
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';

export default class App extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      books:data,
      shelf:[]
    }
  }

  filterBooks = (keyword) => {
    keyword = keyword.toLowerCase(); 
    let filtered = [...this.state.books];
    filtered = filtered.filter(e=> e.title.toLowerCase().includes(keyword) ? true : false );
    this.setState({
      books:filtered
    }); 
  }

  reset = () => {
    this.setState({
      books:data,
    })
  }
  addToShelf = (id) => {
    let shelfUpdated = this.state.shelf.slice();
    let books = this.state.books.slice();
    let toAdd = books.filter(element=>Number.parseInt(id)===element.id ? true : false);
    shelfUpdated.push(toAdd[0]);
    this.setState({
      shelf:shelfUpdated
    })
  }
  clearShelf= () => {
    this.setState({
      shelf:[]
    })
  }
  render () {
    return (
      <div className="App">
        <Header/>
        <SearchBar filterBooks={this.filterBooks} reset = {this.reset}/>
        <div className='bigBookBox'>
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          <Shelf shelfProp={this.state.shelf} clearShelf={this.clearShelf}/>
        </div>
      </div>

    )
  };
}

