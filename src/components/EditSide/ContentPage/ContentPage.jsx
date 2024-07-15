import "./ContentPage.css";
import icons from "../../../assets/icons/Icons";
import CustomizePage from "../CustomizePage/CustomizePage";

function TopButtons() {
  return (
    <div className="form-top-buttons">
      <button id="clear-btn">
        {icons.upperTrashcanIcon}
        Clear Resume
      </button>

      <button id="example-btn">Load Example</button>
    </div>
  );
}

function PersonalDetails() {
  return (
    <section className="personal-details-container">
      <h1>Personal Details</h1>
      <ul className="personal-details-input">
        <li className="details-element">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            className="input-element"
            placeholder="First and last name"
          />
        </li>
        <li className="details-element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="input-element"
            placeholder="Enter email"
          />
        </li>
        <li className="details-element">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            id="phone-number"
            className="input-element"
            placeholder="Enter phone number"
          />
        </li>
        <li className="details-element">
          <label htmlFor="adress">Address</label>
          <input
            type="text"
            id="adress"
            className="input-element"
            placeholder="City, Country"
          />
        </li>
      </ul>
    </section>
  );
}

function EducationDetails({
  isExpanded,
  onToggle,
  isFormActive,
  showForm,
  deleteForm,
  closeForm,
  saveForm,
  formSaved,
  formData,
  setFormData,
  savedEntries,
  editEntry,
  editingIndex,
  toggleVisible,
  isVisible
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    const companyName = document.getElementById('school-name').value;
    saveForm(companyName);
  };

  return (
    <section className="education-details-container">
      <div className="education-top">
        <div className="education-header">
          {icons.educationIcon}
          <h2>Education</h2>
        </div>
        <button className="arrow-button" onClick={onToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`arrow-icon ${isExpanded ? "expanded" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div className="education-data">
          <div className="education-list">
            {formSaved &&
              !isFormActive &&
              savedEntries.map((entry, index) => (
                <button
                  style={index === 0 ? { borderTop: "5px solid #f3f4f6" } : {}}
                  key={index}
                  className="saved-form-btn"
                  onClick={() => editEntry(index)}
                >
                  {entry.school}
                  <button
                    className='visible-btn'
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVisible(index)
                    }}
                  >
                    {isVisible[index] ? icons.eye : icons.eyeSlashed }
                  </button>
                </button>
              ))}
            <button
              className={`add-education-btn ${isFormActive ? "hidden" : ""}`}
              onClick={showForm}
            >
              {icons.plusIcon}
              Education
            </button>
          </div>
          <form className={`education-form ${isFormActive ? "" : "hidden"}`}>
            <div className="input-group">
              <label htmlFor="school-name">
                <span className="label-text">School</span>
              </label>
              <input
                type="text"
                name="school"
                id="school-name"
                placeholder="Enter School / University"
                value={formData.school}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="degree">
                <span className="label-text">Degree</span>
              </label>
              <input
                type="text"
                name="degree"
                id="degree"
                placeholder="Enter Degree / Field Of Study"
                value={formData.degree}
                onChange={handleInputChange}
              />
            </div>
            <div className="dates-group">
              <div className="input-group">
                <label htmlFor="date">
                  <span className="label-text">Start Date</span>
                </label>
                <input
                  type="text"
                  name="startDate"
                  id="date"
                  placeholder="Enter Start Date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="date">
                  <span className="label-text">End Date</span>
                </label>
                <input
                  type="text"
                  name="endDate"
                  id="date"
                  placeholder="Enter End Date"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="location">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-buttons">
              <button
                className="delete-btn"
                type="button"
                onClick={() => deleteForm(editingIndex)}
              >
                {icons.lowerTrashcanIcon}
                Delete
              </button>
              <div className="main-buttons">
                <button
                  className="cancel-btn"
                  type="button"
                  onClick={closeForm}
                >
                  Cancel
                </button>
                <button className="save-btn" type="button" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

function ExperienceDetails({
  isExpanded,
  onToggle,
  isFormActive,
  showForm,
  deleteForm,
  closeForm,
  saveForm,
  formSaved,
  formData,
  setFormData,
  savedEntries,
  editEntry,
  editingIndex,
  toggleVisible,
  isVisible
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    const companyName = document.getElementById('company-name').value;
    saveForm(companyName);
  };

  return (
    <section className="experience-details-container">
      <div className="experience-top">
        <div className="experience-header">
          {icons.experienceIcon}
          <h2>Experience</h2>
        </div>
        <button className="arrow-button" onClick={onToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`arrow-icon ${isExpanded ? "expanded" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div className="experience-data">
          <div className="experience-list">
            {formSaved &&
              !isFormActive &&
              savedEntries.map((entry, index) => (
                <button
                  style={index === 0 ? { borderTop: "5px solid #f3f4f6" } : {}}
                  key={index}
                  className="saved-form-btn"
                  onClick={() => editEntry(index)}
                >
                  {entry.company}
                  <button
                    className="visible-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVisible(index)
                    }}
                  >
                    {isVisible[index] ? icons.eye : icons.eyeSlashed }
                  </button>
                </button>
              ))}
            <button
              className={`add-experience-btn ${isFormActive ? "hidden" : ""}`}
              onClick={showForm}
            >
              {icons.plusIcon}
              Experience
            </button>
          </div>
          <form className={`experience-form ${isFormActive ? "" : "hidden"}`}>
            <div className="input-group">
              <label htmlFor="company-name">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                name="company"
                id="company-name"
                placeholder="Enter Company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="position-title">
                <span className="label-text">Position Title</span>
              </label>
              <input
                type="text"
                name="position"
                id="position-title"
                placeholder="Enter Position Title"
                value={formData.position}
                onChange={handleInputChange}
              />
            </div>
            <div className="dates-group">
              <div className="input-group">
                <label htmlFor="date">
                  <span className="label-text">Start Date</span>
                </label>
                <input
                  type="text"
                  name="startDate"
                  id="date"
                  placeholder="Enter Start Date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="date">
                  <span className="label-text">End Date</span>
                </label>
                <input
                  type="text"
                  name="endDate"
                  id="date"
                  placeholder="Enter End Date"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="location">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-buttons">
              <button
                className="delete-btn"
                type="button"
                onClick={() => deleteForm(editingIndex)}
              >
                {icons.lowerTrashcanIcon}
                Delete
              </button>
              <div className="main-buttons">
                <button
                  className="cancel-btn"
                  type="button"
                  onClick={closeForm}
                >
                  Cancel
                </button>
                <button className="save-btn" type="button" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

function FormContent({
  expandedSection,
  EducationForm,
  ExperienceForm,
  educationFormData,
  setEducationFormData,
  experienceFormData,
  setExperienceFormData,
  savedEducation,
  savedExperience,
  editingEducationIndex,
  editingExperienceIndex,
  educationFormSaved,
  experienceFormSaved,
  educationInfoVisible,
  experienceInfoVisible,
  handleToggle,
  showEducationForm,
  showExperienceForm,
  closeEducationForm,
  closeExperienceForm,
  saveEducationForm,
  saveExperienceForm,
  deleteEducationForm,
  deleteExperienceForm,
  toggleEducationVisibility,
  toggleExperienceVisibility
}) {

  return (
    <div className="form-content">
      <PersonalDetails />
      <EducationDetails
        isExpanded={expandedSection === "education"}
        onToggle={() => handleToggle("education")}
        isFormActive={EducationForm}
        showForm={() => showEducationForm()}
        deleteForm={deleteEducationForm}
        closeForm={() => closeEducationForm()}
        saveForm={saveEducationForm}
        formSaved={educationFormSaved}
        formData={educationFormData}
        setFormData={setEducationFormData}
        savedEntries={savedEducation}
        editEntry={showEducationForm}
        editingIndex={editingEducationIndex}
        toggleVisible={toggleEducationVisibility}
        isVisible={educationInfoVisible}
      />
      <ExperienceDetails
        isExpanded={expandedSection === "experience"}
        onToggle={() => handleToggle("experience")}
        isFormActive={ExperienceForm}
        showForm={() => showExperienceForm()}
        deleteForm={deleteExperienceForm}
        closeForm={() => closeExperienceForm()}
        saveForm={saveExperienceForm}
        formSaved={experienceFormSaved}
        formData={experienceFormData}
        setFormData={setExperienceFormData}
        savedEntries={savedExperience}
        editEntry={showExperienceForm}
        editingIndex={editingExperienceIndex}
        toggleVisible={toggleExperienceVisibility}
        isVisible={experienceInfoVisible}
      />
    </div>
  );
}

function FormContainer({
  activeButton,
  expandedSection,
  EducationForm,
  ExperienceForm,
  educationFormData,
  setEducationFormData,
  experienceFormData,
  setExperienceFormData,
  savedEducation,
  setSavedEducation,
  savedExperience,
  setSavedExperience,
  editingEducationIndex,
  setEditingEducationIndex,
  editingExperienceIndex,
  setEditingExperienceIndex,
  educationFormSaved,
  setEducationFormSaved,
  experienceFormSaved,
  setExperienceFormSaved,
  educationInfoVisible,
  setEducationInfoVisible,
  experienceInfoVisible,
  setExperienceInfoVisible,
  handleToggle,
  showEducationForm,
  showExperienceForm,
  closeEducationForm,
  closeExperienceForm,
  saveEducationForm,
  saveExperienceForm,
  deleteEducationForm,
  deleteExperienceForm,
  toggleEducationVisibility,
  toggleExperienceVisibility,
  activeFontButton,
  setActiveFontButton,
  activeFontColor,
  setActiveFontColor
}) {
  return (
    <div className="form-container">
      <TopButtons />
      {activeButton === 'content' ? (
        <FormContent
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
        />
      ) : (
        <CustomizePage 
          activeFontButton={activeFontButton}
          setActiveFontButton={setActiveFontButton}
          activeFontColor={activeFontColor}
          setActiveFontColor={setActiveFontColor}
        />
      )}
    </div>
  );
}

export default FormContainer;
