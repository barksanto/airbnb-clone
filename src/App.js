// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat'
// import Hello from './components/hello'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    }
  }

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
    fetch(url) //this is AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        })
      })
  }

  render() {
    // const flats = [flat, flat, flat, flat];

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}

          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
