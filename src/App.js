import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Small = props => (
  <h2 style={{fontSize: "5em", textAlign: "center", backgroundColor: "black", color: "white"}}>
      {props.value}
  </h2>
)

const Big = props => (
  <h1 style={{fontSize: "10em", textAlign: "center", backgroundColor: "black", color: "white"}}>
      {props.value}
    </h1>
)


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: '',
      clock: '',
      date: ''
    }
  }

  componentDidMount(){
    setInterval(this.setTime, 1000);
  }

setTime = () => {
  this.setState({time: new Date().getTime().toString(),
                  clock: new Date().toLocaleTimeString(),
                  date: new Date().toDateString()
                })
}

  


render(){
  return(
    <div>
      <Small value={this.state.date}/>
      <Big value={this.state.clock}/>
      <Small value={this.state.time.slice(0,-1)}/>
    </div>
  );
}
}
export default App;
