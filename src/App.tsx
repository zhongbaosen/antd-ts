import * as React from 'react';
import Hello from './components/Hello';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="TypeScript" enthusiasmLevel={10} />
      </div>
    );
  }
}
export default App;