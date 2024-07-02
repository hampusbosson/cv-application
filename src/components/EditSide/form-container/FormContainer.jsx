import './FormContainer.css'
import { useState } from 'react'

function TopButtons() {
    return (
        <div className='form-top-buttons'>
                <button id='clear-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="trashcan">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="education-icon">
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                    </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="plus-icon">
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
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
                            <button className='delete-btn' type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="trashcan-form">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="experience-icon">
                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                    </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="plus-icon">
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
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
                            <button className='delete-btn' type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="trashcan-form">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
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