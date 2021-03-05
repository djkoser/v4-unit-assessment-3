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
  addToshelf = (id) => {
    let shelfUpdated = this.state.shelf.slice(); 
    let booksCopy = this.state.books.slice(); 
    console.log()
    let toAdd = booksCopy.filter(book=> Number.parseInt(book.id) === Number.parseInt(id) ? true : false);
    shelfUpdated.push(toAdd);
    console.log(shelfUpdated)
    this.setState ({
      shelf:shelfUpdated
    })
  };

  clearShelf = () => {
    this.setState({
      shelf:[],
    })
  };

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

  render () {
    return (
      <div className="App">
        <Header/>
        <SearchBar filterBooks={this.filterBooks} reset = {this.reset}/>
        <div className='bigBookBox'>
          <BookList books={this.state.books} addToShelf={this.addToshelf}/>
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
        </div>
      </div>

    )
  };
}

