import React from 'react';

class App extends React.Component {
  render(){
    return(
      <div id="homepage">
        <h1 class="title">Ninja Finder - REST API</h1>
        <h2>Hire a Ninja in your area!</h2>
        <div id="ninjas"></div>
      </div>
    );
  }
}

export default App;
