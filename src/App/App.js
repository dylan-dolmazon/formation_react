import React, { useEffect, useState } from 'react'
import { REST_ADR, REST_RESSOURCES } from '../config/config'
import MemeForm from './component/MemeForm/MemeForm'
import MemeSvgViewer from './component/ui/MemeSvgViewer/MemeSvgViewer'
import Navbar from './component/ui/Navbar/Navbar'
import FlexH from './layout/FlexH/FlexH'
import FlexW from './layout/FlexW/FlexW'

const appInitialState={
  meme:{
    text:'Le react c est cool',
    x:20,
    y:20,
    fonSize:20,
    fontWeight:'900',
    color:'#FFFF',
    imageId:0,
    underline:true,
    italic:false,
    name:'mon 1ier meme'
  },
  image:[],
  memes:[],
}

function App() {
  const [state, setstate] = useState(appInitialState)
  const isLoadStart=false
  useEffect(() => {
    return () => {
      const promiseMEMES = fetch(`${REST_ADR}${REST_RESSOURCES.MEMES}`,{
        headers: {Accept: 'application/json'},
        method: 'GET',
      })
      .then(f=>
        {
          console.log(f);
          return f.json()
        })
      const promiseIMAGES = fetch(`${REST_ADR}${REST_RESSOURCES.IMAGES}`)
        .then(f=>
          {
            console.log(f);
            return f.json()
          })
          Promise.all([promiseIMAGES,promiseMEMES])
            .then(tab_promiseObject => {
              setstate({...state,images:tab_promiseObject[0],memes:tab_promiseObject[1]})
            })
    };
  }, [])
  return (
    <div className='App' style={{height:'95vh'}}> 
      <div>header</div>
      <Navbar/>
      <FlexH>
        <FlexW>
          <MemeSvgViewer 
            meme={state.meme} 
            image={ state.image.find((img) => img.id === state.meme.imageId)}
          />
          <MemeForm
            meme={state.meme} 
            images={ state.image}
            onFormChange={(newMeme)=>{
              setstate({...state,meme:newMeme})
            }}
          />
          <div>Editor</div>
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  )
}
 
export default App