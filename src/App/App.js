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
        <div><Link to="/thumbnail">Thumbnail</Link><Link to="/editor">editor</Link></div>
        <Navbar />
        <FlexH>
          <Routes>
            <Route path="/thumbnail" 
              element={<Thumbnail/>} 
            />
            <Route 
              path="/editor" 
              element={
                <FlexW>
                  <MemeSvgViewer/>
                  <ConnectedMemeForm/>
                </FlexW>
              } 
            />
          </Routes>
        </FlexH>
        <div>Footer</div>
      </Router>
    </div>
  );
}

export default App;