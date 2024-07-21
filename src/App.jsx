import "./App.css";
import EditSide from "./components/EditSide/EditSide";
import ResumeSide from "./components/ResumeSide/ResumeSide";
import { useState, useEffect } from "react";
import exampleData from "./assets/data/exampleData";

function App() {
  const [activeFontColor, setActiveFontColor] = useState("#0e374e");
  const [activeFontButton, setActiveFontButton] = useState("sans-serif");
  const [activeLayoutButton, setActiveLayoutButton] = useState("top");

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
    address: "",
  });

  const [savedEducation, setSavedEducation] = useState([]);
  const [savedExperience, setSavedExperience] = useState([]);

  const [educationInfoVisible, setEducationInfoVisible] = useState(
    Array(savedEducation.length).fill(true)
  );
  const [experienceInfoVisible, setExperienceInfoVisible] = useState(
    Array(savedExperience.length).fill(true)
  );

  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);

  const [educationForm, setEducationForm] = useState(null);
  const [experienceForm, setExperienceForm] = useState(null);

  // Load example data on initial render
  useEffect(() => {
    setPersonalDetailsData(exampleData.personalDetails);
    setSavedEducation([exampleData.education]);
    setSavedExperience(exampleData.experience);
    setEducationInfoVisible([true]);
    setExperienceInfoVisible(exampleData.experience.map(() => true));
  }, []);

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
        personalDetailsData={personalDetailsData}
        setPersonalDetailsData={setPersonalDetailsData}
        educationInfoVisible={educationInfoVisible}
        setEducationInfoVisible={setEducationInfoVisible}
        experienceInfoVisible={experienceInfoVisible}
        setExperienceInfoVisible={setExperienceInfoVisible}
        editingEducationIndex={editingEducationIndex}
        editingExperienceIndex={editingExperienceIndex}
        setEditingEducationIndex={setEditingEducationIndex}
        setEditingExperienceIndex={setEditingExperienceIndex}
        educationForm={educationForm}
        setEducationForm={setEducationForm}
        experienceForm={experienceForm}
        setExperienceForm={setExperienceForm}
      />
      <ResumeSide
        activeFontColor={activeFontColor}
        activeFontButton={activeFontButton}
        activeLayoutButton={activeLayoutButton}
        savedEducation={savedEducation}
        savedExperience={savedExperience}
        personalDetailsData={personalDetailsData}
        educationInfoVisible={educationInfoVisible}
        experienceInfoVisible={experienceInfoVisible}
        educationFormData={educationFormData}
        experienceFormData={experienceFormData}
        educationForm={educationForm}
        experienceForm={experienceForm}
        editingEducationIndex={editingEducationIndex}
        editingExperienceIndex={editingExperienceIndex}
      />
    </>
  );
}

export default App;
