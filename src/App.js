import React from 'react';
import './App.css';
import Card from './Components/Card.js';

class  App extends React.Component {
  intervalID;
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  state = {
    data: [],
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch('https://x7lrnh3llg.execute-api.ap-south-1.amazonaws.com/default/dynamodbTrigger')
      .then(response => response.json())
      .then(data => {
        this.setState({ 'data': data });
        console.log(data[0]);
        this.intervalID = setTimeout(this.getData.bind(this), 60000);
      });
  }
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h4 className="navbar-brand">
           Foreign Exchange Rate
        </h4>
      </nav>
      <Card data={ this.state.data} />
      <h5>Updated at every 1 minute</h5>
    </div>
  );
}
}

export default App;
