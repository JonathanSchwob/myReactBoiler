import React, { Component } from 'react';
import RouterExample from './RouterExample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <RouterExample />
      </div>
    );
  }
}

export default App;
