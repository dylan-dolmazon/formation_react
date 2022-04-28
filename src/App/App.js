import React, { useEffect, useState } from "react";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import {ConnectedMemeForm} from "./components/MemeForm/MemeForm";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/ConnectedMemeSvgViewer";
import Navbar from "./components/ui/Navbar/Navbar";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store from './store/store'


const appInitialState = {
  meme: {
    text: "Le react c'est cool",
    x: 20,
    y: 20,
    fontSize: 20,
    fontWeight: "900",
    color: "#000000",
    imageId: 0,
    underline: true,
    italic: false,
    name: "mon 1er meme",
  },
  images: [],
  memes: [],
};
let isloaded=false;

function App(props) {
  const [state, setstate] = useState(appInitialState);
  useEffect(() => {
    if(isloaded){return}

    

    isloaded=true;
    const promiseMemes = fetch(`${REST_ADR}${REST_RESSOURCES.MEMES}`, {
      headers: { Accept: "application/json" },
      method: "GET",
    }).then((f) => {
      console.log(f);
      return f.json();
    });
    const promiseImage = fetch(`${REST_ADR}${REST_RESSOURCES.IMAGES}`).then(
      (f) => {
        console.log(f);
        return f.json();
      }
    );
    Promise.all([promiseImage, promiseMemes]).then((tab_promiseObject) => {
      setstate({
        ...state,
        images: tab_promiseObject[0],
        memes: tab_promiseObject[1],
      });
    });
  }, []);

  return (
    <div className="App" style={{ height: "90vh" }}>
      <div>Header</div>
      <Navbar />
      <FlexH>
        <FlexW>
          <MemeSvgViewer
            image={state.images.find((img) => img.id === state.meme.imageId)}
          />
          <ConnectedMemeForm
            images={state.images}
          />
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  );
}

export default App;
