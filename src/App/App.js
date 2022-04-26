import React from 'react';
import Button from './component/Button/button';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      compteur:0,
      uneData:"Demat breizh"
    };

  }
  componentDidMount(){
    console.log("le composant est monté et pret a servir",arguments)
  }
  componentDidUpdate(prevProps,prevState){
    console.log(prevProps,this.state)
    console.log("%c%s","font-size:24pt;color:red;font-weight:900","--PREV----------------------NEW--")
    console.log(prevState,this.state)
  }
  render(){
    return (
      <div className="App" data-testid="App">
        <div>Valeur du compteur : {this.state.compteur}</div>

        <Button bgColor="skyblue" onButtonClick={()=>{
          this.setState({compteur:this.state.compteur+1})
        }}>+1</Button>
        
        <Button bgColor="tomato" onButtonClick={()=>{
          this.setState({compteur:this.state.compteur-1})
        }}>-1</Button>

      </div>
    );
  }

}

export default App;