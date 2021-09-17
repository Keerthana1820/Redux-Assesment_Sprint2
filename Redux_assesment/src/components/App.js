import React, { Component } from 'react';
import CountriesAndRegionDropdown from './countriesAndRegionDropdown';
import Data from '../mock/Mock';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="app"><center>
        <h1>{this.props.Content.heading}</h1>
<h1>Select Region </h1>
            <CountriesAndRegionDropdown Content={this.props.Content}/></center>
      </div>
      
    );
  }
}

App.defaultProps = { Content: Data }
export default App;