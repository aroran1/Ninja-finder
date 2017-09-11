import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  render(){
    return(
      <h1>Ninja Finder API</h1>
      <h1 class="title">Ninja Finder - REST API</h1>
      <div id="homepage">
        <h2>Hire a Ninja in your area!</h2>
        <div id="ninjas"></div>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout>, app);
