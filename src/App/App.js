import React from "react";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import {ConnectedMemeForm} from "./components/MemeForm/MemeForm";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/ConnectedMemeSvgViewer";
import Navbar from "./components/ui/Navbar/Navbar";

function App(props) {
  return (
    <div className="App" style={{ height: "90vh" }}>
      <div>Header</div>
      <Navbar />
      <Thumbnail/>
      <FlexH>
        <FlexW>
          <MemeSvgViewer/>
          <ConnectedMemeForm/>
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  );
}

export default App;