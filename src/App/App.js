import React, { useState } from 'react'
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
  name:'mon 1ier meme'

  },
  images:[
    {
      id:0,
      name:'image',
      url:'',
      w:1280,
      h:720
    }
  ]
}

function App() {
  const [state, setstate] = useState(appInitialState)
  return (
    <div className='App' style={{height:'95vh'}}>
      <div>header</div>
      <div>header</div>
      <FlexH>
        <FlexW>
          <div>Viewer</div>
          <div>Editor</div>
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  )
}
 
export default App