import React from 'react';
import './App.css';
import Button from './component/Button/Button';

function App() {
  return (
    <div>
      <Button color="magenta" text="Mon bouton"/>
      <Button bgColor="skyblue">Un bouton</Button>
      <Button>
        <img src="http://www.exempledesiteweb.com/image.jpg" alt="exemple de texte alternatif"/>
        <div>hello</div>
      </Button>
    </div>
  );
}

export default App;