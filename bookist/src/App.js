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

  reset = () => {
    this.setState({
      books:data,
    })
  }
  filterBooks = (keyword) => {
    keyword = keyword.toLowerCase(); 
    let filtered = [...this.state.books];
    filtered = filtered.filter(e=> e.title.toLowerCase().includes(keyword) ? true : false );
    this.setState({
      books:filtered
    }); 
  }
  addToShelf = (id) => {
    let idInt = Number.parseInt(id);
    let shelfUpdated = this.state.shelf.slice();
    let toAdd = this.state.books.slice();
    toAdd = toAdd.filter(element => {
      if (idInt===element.id) {
        if (shelfUpdated.filter(element => idInt === element.id ? true : false).length===0) {
          return true;
        };
      } else {return false}
    });
    if (toAdd[0]) {
      shelfUpdated.push(toAdd[0])
      this.setState({
        shelf:shelfUpdated
      });
    };   
  };

  clearShelf= () => {
    this.setState({
      shelf:[]
    });
  };

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
};

