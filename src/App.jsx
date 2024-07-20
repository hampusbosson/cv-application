import './App.css'
import EditSide from './components/EditSide/EditSide'
import ResumeSide from './components/ResumeSide/ResumeSide'
import { useState } from 'react'

function App() {
  const [activeFontColor, setActiveFontColor] = useState('#0e374e');
  const [activeFontButton, setActiveFontButton] = useState('sans-serif');
  const [activeLayoutButton, setActiveLayoutButton] = useState('top');

  const [educationFormData, setEducationFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [experienceFormData, setExperienceFormData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [personalDetailsData, setPersonalDetailsData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });

  const [savedEducation, setSavedEducation] = useState([]);
  const [savedExperience, setSavedExperience] = useState([]);

  const [educationInfoVisible, setEducationInfoVisible] = useState(
    Array(savedEducation.length).fill(true),
  );
  const [experienceInfoVisible, setExperienceInfoVisible] = useState(
    Array(savedExperience.length).fill(true),
  );


  return (
    <>
      <EditSide 
      activeFontColor={activeFontColor}
      setActiveFontColor={setActiveFontColor}
      activeFontButton={activeFontButton}
      setActiveFontButton={setActiveFontButton}
      setActiveLayoutButton={setActiveLayoutButton}
      educationFormData={educationFormData}
      experienceFormData={experienceFormData}
      setEducationFormData={setEducationFormData}
      setExperienceFormData={setExperienceFormData}
      savedEducation={savedEducation}
      savedExperience={savedExperience}
      setSavedEducation={setSavedEducation}
      setSavedExperience={setSavedExperience}
      setPersonalDetailsData={setPersonalDetailsData}
      educationInfoVisible={educationInfoVisible}
      setEducationInfoVisible={setEducationInfoVisible}
      experienceInfoVisible={experienceInfoVisible}
      setExperienceInfoVisible={setExperienceInfoVisible}
      />
      <ResumeSide 
      activeFontColor={activeFontColor}
      activeFontButton={activeFontButton}
      activeLayoutButton={activeLayoutButton}
      educationFormData={educationFormData}
      savedEducation={savedEducation}
      savedExperience={savedExperience}
      personalDetailsData={personalDetailsData}
      educationInfoVisible={educationInfoVisible}
      experienceInfoVisible={experienceInfoVisible}
      />
    </>
  )
}

export default App
