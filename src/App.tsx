import * as React from 'react';
import './App.css';
import Hello from './components/hello';
import HelloC from './components/helloc';
import StatefulHello from './components/StatefulHello';
import HelloContainer from './containers/HelloContainer';
import logo from './logo.svg';

class App extends React.Component {
  state = {
    count: 2
  };
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  onDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello
          name="Rainbow"
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          enthusiasmLevel={this.state.count}
        />
        <HelloC name="HeiZi" enthusiasmLevel={3} />
        <StatefulHello name="ShuiGe" />
        <HelloContainer />
      </div>
    );
  }
}

export default App;
