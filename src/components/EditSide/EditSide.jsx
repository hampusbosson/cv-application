import { useState } from "react";
import "./EditSide.css";
import FormContainer from "./ContentPage/ContentPage";
import SideBar from "./sidebar/SideBar";

function EditSide({
  activeFontColor,
  setActiveFontColor,
  activeFontButton,
  setActiveFontButton,
  setActiveLayoutButton,
  educationFormData,
  experienceFormData,
  setEducationFormData,
  setExperienceFormData,
  savedEducation,
  savedExperience,
  setSavedEducation,
  setSavedExperience,
  setPersonalDetailsData,
  educationInfoVisible,
  setEducationInfoVisible,
  experienceInfoVisible,
  setExperienceInfoVisible
}) {
  const [activeButton, setActiveButton] = useState("content");

  const [expandedSection, setExpandedSection] = useState(null);
  const [EducationForm, setEducationForm] = useState(null);
  const [ExperienceForm, setExperienceForm] = useState(null);
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);
  const [educationFormSaved, setEducationFormSaved] = useState(null);
  const [experienceFormSaved, setExperienceFormSaved] = useState(null);


  function handleToggle(section) {
    setExpandedSection((prevSection) =>
      prevSection === section ? null : section,
    );
  }

  function showEducationForm(index = null) {
    setEducationForm(true);
    if (index !== null) {
      setEducationFormData(savedEducation[index]);
      setEditingEducationIndex(index);
    } else {
      setEducationFormData({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      });
      setEditingEducationIndex(null);
    }
  }

  function showExperienceForm(index = null) {
    setExperienceForm(true);
    if (index !== null) {
      setExperienceFormData(savedExperience[index]);
      setEditingExperienceIndex(index);
    } else {
      setExperienceFormData({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      });
      setEditingExperienceIndex(null);
    }
  }

  function closeEducationForm() {
    setEducationForm(false);
    setEducationFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  }

  function closeExperienceForm() {
    setExperienceForm(false);
    setExperienceFormData({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  }

  function saveEducationForm(input) {
    if (input === "") {
      alert("please enter school / university name");
      return;
    }
    if (editingEducationIndex === null) {
      setSavedEducation([...savedEducation, educationFormData]);
      setEducationInfoVisible([...educationInfoVisible, true]);
    } else {
      const updatedEductaion = [...savedEducation];
      updatedEductaion[editingEducationIndex] = educationFormData;
      setSavedEducation(updatedEductaion);
    }
    setEducationFormSaved(true);
    closeEducationForm();
  }

  function saveExperienceForm(input) {
    if (input === "") {
      alert("please enter company name");
      return;
    }
    if (editingExperienceIndex === null) {
      setSavedExperience([...savedExperience, experienceFormData]);
      setExperienceInfoVisible([...experienceInfoVisible, true]);
    } else {
      const updatedExperience = [...savedExperience];
      updatedExperience[editingExperienceIndex] = experienceFormData;
      setSavedExperience(updatedExperience);
    }
    setExperienceFormSaved(true);
    closeExperienceForm();
  }

  function deleteEducationForm(index) {
    const updatedEducation = savedEducation.filter((_, i) => i !== index);
    setSavedEducation(updatedEducation);
    closeEducationForm();
  }

  function deleteExperienceForm(index) {
    const updatedExperience = savedExperience.filter((_, i) => i !== index);
    setSavedExperience(updatedExperience);
    closeExperienceForm();
  }

  function toggleEducationVisibility(index) {
    setEducationInfoVisible((prevState) =>
      prevState.map((visible, i) => (i === index ? !visible : visible)),
    );
  }

  function toggleExperienceVisibility(index) {
    setExperienceInfoVisible((prevState) =>
      prevState.map((visible, i) => (i === index ? !visible : visible)),
    );
  }

  return (
    <div className="edit-side">
      <SideBar activeButton={activeButton} setActiveButton={setActiveButton} />
      <FormContainer
        activeButton={activeButton}
        expandedSection={expandedSection}
        EducationForm={EducationForm}
        ExperienceForm={ExperienceForm}
        educationFormData={educationFormData}
        setEducationFormData={setEducationFormData}
        experienceFormData={experienceFormData}
        setExperienceFormData={setExperienceFormData}
        savedEducation={savedEducation}
        setSavedEducation={setSavedEducation}
        savedExperience={savedExperience}
        setSavedExperience={setSavedExperience}
        editingEducationIndex={editingEducationIndex}
        setEditingEducationIndex={setEditingEducationIndex}
        editingExperienceIndex={editingExperienceIndex}
        setEditingExperienceIndex={setEditingExperienceIndex}
        educationFormSaved={educationFormSaved}
        setEducationFormSaved={setEducationFormSaved}
        experienceFormSaved={experienceFormSaved}
        setExperienceFormSaved={setExperienceFormSaved}
        educationInfoVisible={educationInfoVisible}
        setEducationInfoVisible={setEducationInfoVisible}
        experienceInfoVisible={experienceInfoVisible}
        setExperienceInfoVisible={setExperienceInfoVisible}
        handleToggle={handleToggle}
        showEducationForm={showEducationForm}
        showExperienceForm={showExperienceForm}
        closeEducationForm={closeEducationForm}
        closeExperienceForm={closeExperienceForm}
        saveEducationForm={saveEducationForm}
        saveExperienceForm={saveExperienceForm}
        deleteEducationForm={deleteEducationForm}
        deleteExperienceForm={deleteExperienceForm}
        toggleEducationVisibility={toggleEducationVisibility}
        toggleExperienceVisibility={toggleExperienceVisibility}
        activeFontButton={activeFontButton}
        setActiveFontButton={setActiveFontButton}
        activeFontColor={activeFontColor}
        setActiveFontColor={setActiveFontColor}
        setActiveLayoutButton={setActiveLayoutButton}
        setPersonalDetailsData={setPersonalDetailsData}
      />
    </div>
  );
}

export default EditSide;
