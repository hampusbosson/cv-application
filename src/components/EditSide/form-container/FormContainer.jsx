import './FormContainer.css'
import icons from '../../../assets/icons/Icons'
import { useState } from 'react'

function TopButtons() {
    return (
        <div className='form-top-buttons'>
                <button id='clear-btn'>
                    {icons.upperTrashcanIcon}
                Clear Resume</button>
           
            <button id='example-btn'>Load Example</button>
        </div>
    )
}

function PersonalDetails() {
    return (
        <section className='personal-details-container'>
            <h1>Personal Details</h1>
            <ul className='personal-details-input'>
                <li className='details-element'> 
                    <label htmlFor='full-name'>Full Name</label>
                    <input type="text" id='full-name' className='input-element' placeholder='First and last name'/>
                </li>
                <li className='details-element'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' className='input-element' placeholder='Enter email'/>
                </li>
                <li className='details-element'>
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input type="tel" id='phone-number' className='input-element' placeholder='Enter phone number'/>
                </li>
                <li className='details-element'>
                    <label htmlFor='adress'>Address</label>
                    <input type="text" id='adress' className='input-element' placeholder='City, Country'/>
                </li>
            </ul>
        </section>
    )
}

function EducationDetails({ isExpanded, onToggle, isFormActive, showForm, closeForm }) {

    return (
        <section className='education-details-container'>
            <div className='education-top'>
                <div className='education-header'>
                    {icons.educationIcon}
                    <h2>Education</h2>
                </div>
                <button className='arrow-button' onClick={onToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`arrow-icon ${isExpanded ? 'expanded' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
            {isExpanded && (
                <div className='education-list'>
                    <button className={`add-education-btn ${isFormActive ? 'hidden' : ''}`} onClick={showForm}>
                        {icons.plusIcon}
                        Education
                    </button>
                    <form className={`education-form ${isFormActive ? '' : 'hidden'}`}>
                        <div className='input-group'>
                            <label htmlFor="school-name">
                                <span className='label-text'>School</span>
                            </label>
                            <input type="text" id='school-name' placeholder='Enter School / University'/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="degree">
                                <span className='label-text'>Degree</span>
                            </label>
                            <input type="text" id='degree' placeholder='Enter Degree / Field Of Study'/>
                        </div>
                        <div className='dates-group'>
                            <div className='input-group'>
                                <label htmlFor="date">
                                    <span className='label-text'>Start Date</span>
                                </label>
                                <input type="text" id='date' placeholder='Enter Start Date'/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="date">
                                    <span className='label-text'>End Date</span>
                                </label>
                                <input type="text" id='date' placeholder='Enter End Date'/>
                            </div>
                        </div>
                        <div className='input-group'>
                                <label htmlFor="location">
                                    <span className='label-text'>Location</span>
                                </label>
                                <input type="text" id='location' placeholder='Enter Location'/>
                        </div>
                        <div className='form-buttons'>
                            <button className='delete-btn' type='button' onClick={closeForm}>
                                {icons.lowerTrashcanIcon}
                                Delete
                            </button>
                            <div className='main-buttons'>
                                <button className='cancel-btn' type='button' onClick={closeForm}>Cancel</button>
                                <button className='save-btn' type='button'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </section>
    )
}

function ExperienceDetails( {isExpanded, onToggle, isFormActive, showForm, closeForm }) {
    return (
        <section className='experience-details-container'>
            <div className='experience-top'>
                <div className='experience-header'>
                    {icons.experienceIcon}
                    <h2>Experience</h2>
                </div>
                <button className='arrow-button' onClick={onToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`arrow-icon ${isExpanded ? 'expanded' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
            {isExpanded && (
                <div className='experience-list'>
                    <button className={`add-experience-btn ${isFormActive ? 'hidden' : ''}`} onClick={showForm}>
                        {icons.plusIcon}
                        Experience
                    </button>
                    <form className={`experience-form ${isFormActive ? '' : 'hidden'}`}>
                        <div className='input-group'>
                            <label htmlFor="company-name">
                                <span className='label-text'>Company Name</span>
                            </label>
                            <input type="text" id='company-name' placeholder='Enter Company'/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="position-title">
                                <span className='label-text'>Position Title</span>
                            </label>
                            <input type="text" id='position-title' placeholder='Enter Position Title'/>
                        </div>
                        <div className='dates-group'>
                            <div className='input-group'>
                                <label htmlFor="date">
                                    <span className='label-text'>Start Date</span>
                                </label>
                                <input type="text" id='date' placeholder='Enter Start Date'/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="date">
                                    <span className='label-text'>End Date</span>
                                </label>
                                <input type="text" id='date' placeholder='Enter End Date'/>
                            </div>
                        </div>
                        <div className='input-group'>
                                <label htmlFor="location">
                                    <span className='label-text'>Location</span>
                                </label>
                                <input type="text" id='location' placeholder='Enter Location'/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="description">
                                <span className='label-text'>Description</span>
                            </label>
                            <textarea type="text" id='description' placeholder='Enter Description' /> 
                        </div>
                        <div className='form-buttons'>
                            <button className='delete-btn' type='button' onClick={closeForm}>
                                {icons.lowerTrashcanIcon}
                                Delete
                            </button>
                            <div className='main-buttons'>
                                <button className='cancel-btn' type='button' onClick={closeForm}>Cancel</button>
                                <button className='save-btn' type='button'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

        </section>
    )
}

function FormContainer() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [EducationForm, setEducationForm] = useState(null);
    const [ExperienceForm, setExperienceForm] = useState(null);

    function handleToggle(section) {
        setExpandedSection(prevSection => (prevSection === section ? null : section));
    }

    function showEducationForm() {
        setEducationForm(true);
    }

    function showExperienceForm() {
        setExperienceForm(true);
    }

    function closeEducationForm() {
        setEducationForm(false);
    }

    function closeExperienceForm() {
        setExperienceForm(false);
    }

    return (
        <div className='form-container'>
            <TopButtons />
            <PersonalDetails />
            <EducationDetails 
                isExpanded={expandedSection === 'education'}
                onToggle={() => handleToggle('education')}
                isFormActive={EducationForm === true}
                showForm={() => showEducationForm()}
                closeForm={() => closeEducationForm()}
            />
            <ExperienceDetails 
                isExpanded={expandedSection === 'experience'}
                onToggle={() => handleToggle('experience')}
                isFormActive={ExperienceForm === true}
                showForm={() => showExperienceForm()}
                closeForm={() => closeExperienceForm()}
            />
        </div>
    )
}

export default FormContainer;