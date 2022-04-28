import React from "react";
import { BrowserRouter as Router, Route, NavLink, Routes, Link } from 'react-router-dom'
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import {ConnectedMemeForm} from "./components/MemeForm/MemeForm";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/ConnectedMemeSvgViewer";
import Navbar from "./components/ui/Navbar/Navbar";

function App(props) {
  return (
    <div className="App" style={{ height: "90vh" }}>
      <Router>
        <Navbar />
        <FlexH>
          <Routes>
            <Route path="/thumbnail" 
              element={<Thumbnail/>} 
            />
            <Route 
              path="/editor" 
              element={<MemeEditor/>} 
            />
          </Routes>
        </FlexH>
        <div>Footer</div>
      </Router>
    </div>
  );
}

function MemeEditor(){
  return (
    <FlexW>
      <MemeSvgViewer/>
      <ConnectedMemeForm/>
    </FlexW>
  )
}

export default App;