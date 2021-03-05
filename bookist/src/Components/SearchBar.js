import React, {Component} from 'react'; 
//props = filterBooks(keyword) reset()
export default class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userInput:""
    }
  }

  handleChange = (value) => {
    this.setState({
      userInput:value
    })
  };

  handleClick = () => {
    this.props.filterBooks(this.state.userInput)
  }

  handleClear = () => {
    this.props.reset();
    this.setState({
      userInput:""
    })
  }

  render () {
    return (
      <div className='searchComponent'>
        <input type='text' placeholder='Please type here to search' value={this.state.userInput} onChange={e=>this.handleChange(e.target.value)}></input>
        <button onClick={this.handleClick}>search</button>
        <button onClick={this.handleClear}>clear search</button>
      </div>

    )
  };
}