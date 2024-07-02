import './SideBar.css'
import { useState } from 'react';
import icons from '../../../assets/icons/Icons';

function SideBar() {
    const [activeButton, setActiveButton] = useState('content');

    function handleClick(buttonName) {
        setActiveButton(buttonName)
    }

    return (
       <nav className='sidebar'>
            <button className={`content-btn ${activeButton === 'content' ? 'button-active' : ''}`} 
                onClick={() => handleClick('content')}>
                {icons.contentIcon}                
                Content
            </button>
            <button className={`customize-btn ${activeButton === 'customize' ? 'button-active' : ''}`} 
                onClick={() => handleClick('customize')}>
                {icons.customizeIcon}
                Customize
            </button>
       </nav>
    )
}

export default SideBar;