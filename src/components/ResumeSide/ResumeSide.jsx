import './ResumeSide.css'
import icons from '../../assets/icons/Icons';

function Header() {
    return (
        <div className='resume-header'>
            <h1 className='header-name'>Example Name</h1>
            <div className='header-info'>
                <div className='mail-info'>
                    {icons.enevelope}
                    <p>example.email@mail.co.uk</p>
                </div>
                <div className='phone-info'>
                    {icons.phone}
                    <p>+46 12-345 67 89</p>
                </div>
                <div className='location-info'>
                    {icons.location}
                    <p>Stockholm, SWE</p>
                </div>
            </div>
        </div>
    )
}

function ResumeSide() {
    return (
        <section className='resume-side'>
            <Header />
        </section>
    )
}

export default ResumeSide; 