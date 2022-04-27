import React, { useState } from 'react'
import MemeForm from './component/MemeForm/MemeForm'
import MemeSvgViewer from './component/ui/MemeSvgViewer/MemeSvgViewer'
import Navbar from './component/ui/Navbar/Navbar'
import FlexH from './layout/FlexH/FlexH'
import FlexW from './layout/FlexW/FlexW'

const appInitialState={meme:{
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
  image:[
    {
      id:0,
      name:'image',
      url:'kb9.jpg',
      w:710,
      h:444
    }
  ]
}

function App() {
  const [state, setstate] = useState(appInitialState)
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