import React from 'react';
import Header from '../components/Header';
import Featured from '../components/Featured';

class Home extends React.Component {

  componentDidMount() {
    fetch('/api/data')
      .then((resp) => { return resp.json() })
      .then((data) => { console.log(data) })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home