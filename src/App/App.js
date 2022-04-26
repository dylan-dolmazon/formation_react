import React from 'react';
import Button from './component/Button/Button';
import './App.css'

class App extends React.Component{
  compteur=0;
  render(){
    return (
      <div className="App" data-testid="App">
        <div>Valeur du compteur : {this.compteur}</div>

        <Button bgColor="skyblue" onButtonClick={()=>{alert('le bouton est click'+ ': ' + this.compteur)}}>+1</Button>
        <Button bgColor="tomato">-1</Button>

      </div>
    );
  }

}

export default App;