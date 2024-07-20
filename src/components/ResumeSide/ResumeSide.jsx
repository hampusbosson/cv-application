import "./ResumeSide.css";
import icons from "../../assets/icons/Icons";

const getLuminance = (color) => {
  const rgb = color.match(/\w\w/g).map((x) => parseInt(x, 16));
  const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  return luminance;
};

function Header({
  activeFontColor,
  activeFontButton,
  activeLayoutButton,
  personalDetailsData,
}) {
  // Determine if the color is dark or light
  const isDark = getLuminance(activeFontColor) < 120; // Threshold can be adjusted

  const styles = {
    backgroundColor: activeFontColor,
    color: isDark ? "white" : "black",
  };

  const font = {
    fontFamily: activeFontButton,
  };

  const iconColor = isDark ? "white" : "black";

  return (
    <div className={`resume-header ${activeLayoutButton}`} style={styles}>
      <div className={`header-name ${activeLayoutButton}`}>
        <h1 style={font}>{personalDetailsData.fullName}</h1>
      </div>
      <div className={`header-info ${activeLayoutButton}`}>
        <div className="mail-info">
          {icons.enevelope(iconColor)}
          <p>{personalDetailsData.email}</p>
        </div>
        <div className="phone-info">
          {icons.phone(iconColor)}
          <p>{personalDetailsData.phone}</p>
        </div>
        <div className="location-info">
          {icons.location(iconColor)}
          <p>{personalDetailsData.address}</p>
        </div>
      </div>
    </div>
  );
}

function Education({ activeFontColor, savedEducation, isVisible }) {
  // Determine if the color is dark or light
  const isDark = getLuminance(activeFontColor) < 120; // Threshold can be adjusted

  const styles = {
    color: activeFontColor,
    backgroundColor: isDark ? "rgba(14, 55, 78, 0.07)" : "black",
  };

  return (
    <div className="education-container">
      <h2 className="resume-education-header" style={styles}>
        Education
      </h2>
      <ul className="education-list-resume">
        {savedEducation.map((entry, index) => (
          <li key={index} className="education-entry" style={isVisible[index] ? {} : { display: 'none' }}>
            <div className="date-location-box">
              <p className="date">
                {entry.startDate} - {entry.endDate}
              </p>
              <p className="loc">{entry.location}</p>
            </div>
            <div className="school-degree-box">
              <p className="school">{entry.school}</p>
              <p className="degree">{entry.degree}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience({ activeFontColor, savedExperience, isVisible }) {
  // Determine if the color is dark or light
  const isDark = getLuminance(activeFontColor) < 120; // Threshold can be adjusted

  const styles = {
    color: activeFontColor,
    backgroundColor: isDark ? "rgba(14, 55, 78, 0.07)" : "black",
  };

  return (
    <div className="experience-container">
      <h2 className="resume-experience-header" style={styles}>
        Professional Experience
      </h2>
      <ul className="experience-list-resume">
        {savedExperience.map((entry, index) => (
          <li key={index} className="experience-entry" style={isVisible[index] ? {} : { display: 'none' }}>
            <div className="date-location-box">
              <p className="date">
                {entry.startDate} - {entry.endDate}
              </p>
              <p className="loc">{entry.location}</p>
            </div>
            <div className="company-position-description-box">
              <p className="company">{entry.company}</p>
              <p className="position">{entry.position}</p>
              <p className="position-description">{entry.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResumeSide({
  activeFontColor,
  activeFontButton,
  activeLayoutButton,
  savedEducation,
  savedExperience,
  personalDetailsData,
  educationInfoVisible,
  experienceInfoVisible
}) {

  const styles = {
    fontFamily: activeFontButton,
  };

  return (
    <section className={`resume-side ${activeLayoutButton}`} style={styles}>
      <Header
        activeFontColor={activeFontColor}
        activeFontButton={activeFontButton}
        activeLayoutButton={activeLayoutButton}
        personalDetailsData={personalDetailsData}
      />
      <div className="resume-content">
        <Education
          activeFontColor={activeFontColor}
          savedEducation={savedEducation}
          isVisible={educationInfoVisible}
        />
        <Experience
          activeFontColor={activeFontColor}
          savedExperience={savedExperience}
          isVisible={experienceInfoVisible}
        />
      </div>
    </section>
  );
}

export default ResumeSide;
