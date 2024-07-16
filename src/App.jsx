import './App.css'
import EditSide from './components/EditSide/EditSide'
import ResumeSide from './components/ResumeSide/ResumeSide'
import { useState } from 'react'

function App() {
  const [activeFontColor, setActiveFontColor] = useState('#0e374e')

  return (
    <>
      <EditSide 
      activeFontColor={activeFontColor}
      setActiveFontColor={setActiveFontColor}
      />
      <ResumeSide 
      activeFontColor={activeFontColor}
      />
    </>
  )
}

export default App
