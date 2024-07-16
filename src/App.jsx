import './App.css'
import EditSide from './components/EditSide/EditSide'
import ResumeSide from './components/ResumeSide/ResumeSide'
import { useState } from 'react'

function App() {
  const [activeFontColor, setActiveFontColor] = useState('#0e374e');
  const [activeFontButton, setActiveFontButton] = useState('sans-serif');


  return (
    <>
      <EditSide 
      activeFontColor={activeFontColor}
      setActiveFontColor={setActiveFontColor}
      activeFontButton={activeFontButton}
      setActiveFontButton={setActiveFontButton}
      />
      <ResumeSide 
      activeFontColor={activeFontColor}
      activeFontButton={activeFontButton}
      />
    </>
  )
}

export default App
