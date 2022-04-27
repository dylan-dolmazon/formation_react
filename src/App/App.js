import React from 'react'
import FlexH from './layout/FlexH/FlexH'
import FlexW from './layout/FlexW/FlexW'

function App() {
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