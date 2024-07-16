import './ResumeSide.css'
import icons from '../../assets/icons/Icons';

const getLuminance = (color) => {
    const rgb = color.match(/\w\w/g).map((x) => parseInt(x, 16));
    const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    return luminance;
};

function Header( {activeFontColor} ) {
    // Determine if the color is dark or light
    const isDark = getLuminance(activeFontColor) < 120; // Threshold can be adjusted

    const styles = {
        backgroundColor: activeFontColor,
        color: isDark ? 'white' : 'black'
    };

    const iconColor = isDark ? 'white' : 'black';


    return (
        <div className='resume-header' style={styles}>
            <h1 className='header-name'>Example Name</h1>
            <div className='header-info'>
                <div className='mail-info'>
                    {icons.enevelope(iconColor)}
                    <p>example.email@mail.co.uk</p>
                </div>
                <div className='phone-info'>
                    {icons.phone(iconColor)}
                    <p>+46 12-345 67 89</p>
                </div>
                <div className='location-info'>
                    {icons.location(iconColor)}
                    <p>Stockholm, SWE</p>
                </div>
            </div>
        </div>
    )
}

function Education( {activeFontColor} ) {
    // Determine if the color is dark or light
    const isDark = getLuminance(activeFontColor) < 120; // Threshold can be adjusted

    const styles = {
        color: activeFontColor,
        backgroundColor: isDark ? 'rgba(14, 55, 78, 0.07)' : 'black'
    };

    return (
        <div className='education-container'>
            <h2 className='resume-education-header' style={styles}>Education</h2>
            
                <ul className='education-list'>
                    <li className='education-entry'>
                        <div className='date-location-box'>
                            <p className='date'>08/2020 - present</p>
                            <p className='loc'>New York City, US</p>
                        </div>
                        <div className='school-degree-box'>
                            <p className='school'>London City University</p>
                            <p className='degree'>Bachelors in Economics</p>
                        </div>
                    </li>
                    <li className='education-entry'>
                        <div className='date-location-box'>
                            <p className='date'>08/2020 - present</p>
                            <p className='loc'>New York City, US</p>
                        </div>
                        <div className='school-degree-box'>
                            <p className='school'>London City University</p>
                            <p className='degree'>Bachelors in Economics</p>
                        </div>
                    </li>
                </ul>
            
        </div>
    )
}

function Experience( {activeFontColor} ) {
    // Determine if the color is dark or light
    const isDark = getLuminance(activeFontColor) < 120; // Threshold can be adjusted

    const styles = {
        color: activeFontColor,
        backgroundColor: isDark ? 'rgba(14, 55, 78, 0.07)' : 'black'
    };

    return (
        <div className='experience-container'>
            <h2 className='resume-experience-header' style={styles}>Professional Experience</h2>
            
                <ul className='experience-list'>
                    <li className='experience-entry'>
                        <div className='date-location-box'>
                            <p className='date'>08/2020 - present</p>
                            <p className='loc'>New York City, US</p>
                        </div>
                        <div className='company-position-description-box'>
                            <p className='company'>London City University</p>
                            <p className='position'>Bachelors in Economics</p>
                            <p className='position-description'>Example text i worked at this place and this place blah blah blah blah hello world this is some text</p>
                        </div>
                    </li>
                    <li className='experience-entry'>
                        <div className='date-location-box'>
                            <p className='date'>08/2020 - present</p>
                            <p className='loc'>New York City, US</p>
                        </div>
                        <div className='company-position-description-box'>
                            <p className='company'>London City University</p>
                            <p className='position'>Bachelors in Economics</p>
                            <p className='position-description'>Example text i worked at this place and this place blah blah blah blah hello world this is some text</p>
                        </div>
                    </li>
                </ul>
            
        </div>
    )
}

function ResumeSide( {activeFontColor} ) {
    return (
        <section className='resume-side'>
            <Header 
            activeFontColor={activeFontColor}
            />
            <Education 
            activeFontColor={activeFontColor}
            />
            <Experience 
            activeFontColor={activeFontColor}
            />
        </section>
    )
}

export default ResumeSide; 